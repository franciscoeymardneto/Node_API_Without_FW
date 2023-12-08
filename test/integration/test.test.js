import test from "node:test";
import assert from "node:assert";
import { promisify } from "node:util";

test("Car Integration Test Suite", async (t) => {
  const testPort = 9000;
  process.env.PORT = testPort;

  const { server } = await import("../../src/index.js");

  const serverURL = `http://localhost:${testPort}/cars`;

  await t.test("It should create a car", async (t) => {
    const data = {
      name: "Ford Mustang",
      hp: 400,
      version: "GT500",
    };

    const response = await fetch(serverURL, {
      method: "POST",
      body: JSON.parse(data),
    });

    assert.deepStrictEqual(
      response.headers.get("content-type"),
      "application/json",
      "it should have the content type app/json within header"
    );

    assert.strictEqual(
      response.status,
      201,
      "it should return the 201 - CREATED status code"
    );

    const result = await response.json();

    assert.deepStrictEqual(
      result.success,
      "Car created with success!",
      "it should return a success message."
    );

    assert.ok(result.data.id.length > 30, "it should return a valid uuid");
  });

  await promisify(server.close.bind(server))();
});
