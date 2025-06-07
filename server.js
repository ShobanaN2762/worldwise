const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "data/cities.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/app", router); // <<–– change to /app

const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
