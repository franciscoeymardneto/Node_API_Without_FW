import { once } from "node:events";
import { DEFAULT_HEADER } from "../util/utils.js";
import Car from "../entities/car.js";

export function routes({ carsService }) {
  return {
    "/cars:get": async (req, res) => {
      const response = await carsService.find();
      res.writeHead(200, DEFAULT_HEADER);
      res.write(
        JSON.stringify({
          value: response,
        })
      );
      res.end();
    },
    "/cars:post": async (req, res) => {
      const data = new Car(JSON.parse(await once(req, "data")));

      const reponse = await carsService.create({
        data: data,
      });

      res.writeHead(201, DEFAULT_HEADER);
      res.write(
        JSON.stringify({
          success: "Car created with success!",
          data: reponse,
        })
      );
      res.end();
    },
  };
}
