import { randomUUID } from "node:crypto";
export default class Car {
  constructor({ name, hp, version }) {
    this.id = randomUUID();
    this.name = name;
    this.hp = hp;
    this.version = version;
  }
}
