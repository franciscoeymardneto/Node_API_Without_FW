import { readFile, writeFile } from "node:fs/promises";
export default class CarsRepository {
  constructor({ file }) {
    this.file = file;
  }

  async #readFileContent() {
    return JSON.parse(await readFile(this.file));
  }

  async find() {
    return await this.#readFileContent();
  }

  async create({ data }) {
    const currentData = await this.#readFileContent();

    currentData.push(data);

    await writeFile(this.file, JSON.stringify(currentData));

    return data;
  }
}
