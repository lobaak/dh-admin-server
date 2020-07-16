const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const { v4: uuidv4 } = require("uuid");

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.id = uuidv4();
    req.body.createdAt = Date.now();
  }

  next();
});
server.use(middlewares);
server.use(router);

server.listen(6996, () => {
  console.log("JSON Server is running");
});
