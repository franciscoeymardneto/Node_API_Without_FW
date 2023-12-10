import { test, describe, before, after } from "node:test";
import assert from "node:assert";
import { writeFile, unlink } from "node:fs/promises";

import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";
import CarsRepository from "../../../src/repositories/carsRepository.js";

describe("Car repository test suite", async () => {
  const filePath = join(dirname(fileURLToPath(import.meta.url)), "dbTest.json");

  const databaseMock = {
    id: "39171624-7a51-443b-99cf-5ff41b86c250",
    name: "Ford Mustang",
    hp: 400,
    version: "GT500",
  };
  before(async () => {
    await writeFile(filePath, "[]");
  });

  after(async () => {
    await unlink(filePath);
  });

  test("Should save a new user into a file", async () => {
    const repo = new CarsRepository({ file: filePath });

    const result = await repo.create({
      data: databaseMock,
    });

    assert.deepStrictEqual(result, databaseMock);
  });

  test("Should get the user array from the file", async () => {
    const repo = new CarsRepository({ file: filePath });

    const result = await repo.find({
      data: databaseMock,
    });

    assert.deepStrictEqual(result, [databaseMock]);
  });
});
