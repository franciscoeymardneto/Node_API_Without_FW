import { test, describe } from "node:test";
import assert from "node:assert";
import { composeCarsService } from "../../../src/factories/carsFactory.js";
import CarsService from "../../../src/services/carsService.js";

describe("Cars factory test suite", async () => {
  test("Ensure that factory returns a instance of CarsService", async (t) => {
    const carsService = composeCarsService();

    assert.ok(carsService instanceof CarsService);
  });
});
