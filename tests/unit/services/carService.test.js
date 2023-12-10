import { test, describe, beforeEach, mock } from "node:test";
import assert from "node:assert";
import CarsService from "../../../src/services/carsService.js";

describe("Car service test suit", async () => {
  const databaseMock = [
    {
      id: "39171624-7a51-443b-99cf-5ff41b86c250",
      name: "Ford Mustang",
      hp: 400,
      version: "GT500",
    },
  ];
  const CarRepositoryStub = {
    find: mock.fn(async () => {
      return databaseMock;
    }),
    create: mock.fn(async ({ data }) => databaseMock[0]),
  };

  beforeEach(() => {
    mock.restoreAll();
  });

  test("Should find all cars", async (t) => {
    const carsService = new CarsService({ carsRepository: CarRepositoryStub });

    const result = await carsService.find();

    assert.deepStrictEqual(CarRepositoryStub.find.mock.callCount(), 1);
    assert.deepStrictEqual(result, databaseMock);
  });

  test("Should create a new service", async (t) => {
    const carsService = new CarsService({ carsRepository: CarRepositoryStub });

    const result = await carsService.create({
      data: databaseMock[0],
    });

    assert.deepStrictEqual(CarRepositoryStub.create.mock.callCount(), 1);
    assert.deepStrictEqual(result, databaseMock[0]);
  });
});
