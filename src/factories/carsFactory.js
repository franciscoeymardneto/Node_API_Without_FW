import CarsRepository from "../repositories/carsRepository.js";
import CarsService from "../services/carsService";

export function composeInstance({ fileName }) {
  const carsRepository = new CarsRepository({ file: fileName });
  return new CarsService({ carsRepository });
}
