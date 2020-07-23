var jsonServer = require("json-server");
var db = require("./db.js");
var server = jsonServer.create();
var router = jsonServer.router(db());
var middlewares = jsonServer.defaults();
var port = process.env.PORT || 5000;

//github.com/typicode/json-server/issues/366#issuecomment-439008812
router.db._.mixin({
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

server.use(middlewares);
server.use(router);
server.listen(port, function () {
  console.log("JSON Server is running on http://localhost:" + port);
});
