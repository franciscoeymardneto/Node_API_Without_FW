import { test, describe, mock } from "node:test";
import assert from "node:assert";
import { routes } from "../../../src/routes/carsRoutes.js";
import EventEmitter, { once } from "node:events";

describe("Car routes - endpoints test suie", async (t) => {
  const databaseMock = [
    {
      id: "39171624-7a51-443b-99cf-5ff41b86c250",
      name: "Ford Mustang",
      hp: 400,
      version: "GT500",
    },
  ];

  const carServiceStub = {
    find: async () => databaseMock,
    create: async ({ data }) => databaseMock[0],
  };

  test("Should call the cars:get route without errors", async (t) => {
    t.mock.method(carServiceStub, "find");

    const carsService = carServiceStub;

    const endpoints = routes({ carsService });

    const reponseStub = {
      writeHead: mock.fn(),
      write: mock.fn((item) => {
        const expect = JSON.stringify({ value: databaseMock });
        assert.strictEqual(item, expect);
      }),
      end: mock.fn(),
    };

    assert.strictEqual(carsService.find.mock.calls.length, 0);

    await endpoints["/cars:get"]({}, reponseStub);

    assert.strictEqual(carsService.find.mock.calls.length, 1);
    assert.strictEqual(reponseStub.writeHead.mock.calls.length, 1);
    assert.strictEqual(reponseStub.write.mock.calls.length, 1);
    assert.strictEqual(reponseStub.end.mock.calls.length, 1);

    // assert.strictEqual(CarsService.)
  });

  test("Should call the cars:post route without erros", async (t) => {
    t.mock.method(carServiceStub, "create");

    const carsService = carServiceStub;
    const inputCar = {
      name: "Ford Mustang",
      hp: 400,
      version: "GT500",
    };

    const mockRequestWithData = new EventEmitter();
    mockRequestWithData.method = "POST";
    mockRequestWithData.url = "/cars";

    // Simulate receiving data in the request
    setImmediate(() => {
      mockRequestWithData.emit("data", JSON.stringify(inputCar));
      mockRequestWithData.emit("end"); // Simulate end of data transmission
    });

    const mockReponse = {
      writeHead: mock.fn(),
      end: mock.fn(),
      write: mock.fn((item) => {
        const result = JSON.parse(item);

        assert.ok(
          result.data.id && result.data.id.length > 30,
          "Should have a valid id"
        );

        const expect = JSON.stringify({
          success: "Car created with success!",
          data: { id: result.data.id, ...inputCar },
        });

        assert.strictEqual(item, expect, "Should return the created car");
      }),
    };

    const endpoints = routes({ carsService });

    await endpoints["/cars:post"](mockRequestWithData, mockReponse);

    assert.strictEqual(carsService.create.mock.calls.length, 1);
    assert.strictEqual(mockReponse.writeHead.mock.calls.length, 1);
    assert.strictEqual(mockReponse.write.mock.calls.length, 1);
    assert.strictEqual(mockReponse.end.mock.calls.length, 1);
  });
});
