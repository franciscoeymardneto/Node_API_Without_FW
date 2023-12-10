import { join, dirname } from "node:path";

import { fileURLToPath } from "node:url";

import CarsRepository from "../repositories/carsRepository.js";
import CarsService from "../services/carsService.js";

export function composeCarsService() {
  const currentDir = dirname(fileURLToPath(import.meta.url));

  const filePath = join(currentDir, "/../../database", "data.json");

  const carsRepository = new CarsRepository({ file: filePath });
  return new CarsService({ carsRepository });
}
