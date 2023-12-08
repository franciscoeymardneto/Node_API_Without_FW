import { parse } from "node:url";
import { DEFAULT_HEADER } from "./util/utils.js";

const rootRoutes = {
  "/cars:get": async (req, res) => {
    res.write("Car");
    res.end();
  },
  default: async (req, res) => {
    throw new Error("Die from cringe");
    // res.writeHead(404, DEFAULT_HEADER);
    // res.end("Not Found!");
  },
};

function handler(req, res) {
  const { method, url } = req;

  const { pathname } = parse(url, true);

  const key = `${pathname}:${method.toLowerCase()}`;

  const picked = rootRoutes[key] || rootRoutes.default;

  return Promise.resolve(picked(req, res)).catch(errorHandler(res));
}

function errorHandler(res) {
  return (error) => {
    console.log("Something wrong is not rigth!", error.stack);
    res.writeHead(500, DEFAULT_HEADER);
    res.write(
      JSON.stringify({
        error: "Internal Error!",
      })
    );

    return res.end();
  };
}

export default handler;
