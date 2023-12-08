export default class CarsService {
  constructor({ carsRepository }) {
    this.carsRepository = carsRepository;
  }

  async find() {
    return await this.carsRepository.find();
  }

  async create({ data }) {
    return this.carsRepository.create({
      data,
    });
  }
}
