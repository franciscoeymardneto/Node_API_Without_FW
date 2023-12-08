import http from "node:http";
import handler from "./handler.js";

const port = process.env.PORT || 3000;

const server = http.createServer(handler);

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

export { server };
