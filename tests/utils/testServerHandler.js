export async function initTestServer() {
  const testPort = 9000;

  process.env.PORT = testPort;

  const { server } = await import("../../src/index.js");

  return {
    url: `http://localhost:${testPort}`,
    server: server,
  };
}
