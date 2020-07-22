const { join } = require("path");
const { tmpdir } = require("os");
const fs = require("fs");

const jsonServer = require("json-server");
const file = "db.json";
const source = join(tmpdir(), file);

fs.copyFile(file, source, (err) => {
  if (err) throw err;
});

const server = jsonServer.create();
const router = jsonServer.router(source);
const middlewares = jsonServer.defaults();
// const { v4: uuidv4 } = require("uuid");

//github.com/typicode/json-server/issues/366#issuecomment-439008812
https: router.db._.mixin({
  getById(collection, id) {
    const idProp = this.__id();
    if (Array.isArray(id)) {
      const ids = id.map((_id) => _id.toString());
      return this.filter(collection, (doc) => {
        if (this.has(doc, idProp)) {
          return ids.includes(doc[idProp].toString());
        }
      });
    }
    return this.find(collection, (doc) => {
      if (this.has(doc, idProp)) {
        return doc[idProp].toString() === id.toString();
      }
    });
  },
});

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST") {
    // req.body.id = uuidv4();
    req.body.createdAt = Date.now();
  }
  next();
});
server.use(middlewares);
server.use(router);

server.listen(6996, () => {
  console.log("JSON Server is running");
});
