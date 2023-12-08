import { once } from "node:events";
import { DEFAULT_HEADER } from "../util/utils.js";
import Car from "../entities/car.js";

export function routes({ CarsService }) {
  return {
    "/cars:get": async (req, res) => {
      res.writeHead(200, DEFAULT_HEADER);
      res.end();
    },
    "/cars:post": async (req, res) => {
      const data = new Car(JSON.parse(await once(req, "data")));

      res.writeHead(201, DEFAULT_HEADER);
      res.write(
        JSON.stringify({
          success: "Car created with success!",
          data: data,
        })
      );
      res.end();
    },
  };
}
