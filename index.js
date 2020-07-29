const jsonServer = require('json-server');
const { v4: uuid } = require('uuid');

const db = require('./db.js');

const server = jsonServer.create();
const router = jsonServer.router(db());
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000;

// github.com/typicode/json-server/issues/366#issuecomment-439008812
router.db._.mixin({
  getById(collection, id) {
    const idProp = this.__id();
    if (Array.isArray(id)) {
      const ids = id.map((_id) => _id.toString());

      return this.filter(collection, (doc) => {
        if (this.has(doc, idProp)) {
          return ids.includes(doc[idProp].toString());
        }
        return doc;
      });
    }

    return this.find(collection, (doc) => {
      if (this.has(doc, idProp)) {
        return doc[idProp].toString() === id.toString();
      }
      return doc;
    });
  },
});

server.use(
  jsonServer.rewriter({
    '/groups': '/groups?_expand=user&_expand=application',
    '/groups/:id': '/groups/$1?_expand=user&_expand=application',
    '/users': '/users?_expand=userType',
    '/users/:id': '/users/$1?_expand=userType',
  })
);
server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/groups', (req, res, next) => {
  const defaults = {
    createdAt: Date.now(),
    id: uuid(),
    applicationId: [],
    userId: [],
  };
  req.body = { ...defaults, ...req.body };
  next();
});

server.post('/users', (req, res, next) => {
  const defaults = {
    id: uuid(),
    createdAt: Date.now(),
  };
  req.body = { ...defaults, ...req.body };
  next();
});

server.put('/users/:id', (req, res, next) => {
  const { id } = req.params;
  const user = router.db.get('users').find({ id }).value();
  req.body = { ...user, ...req.body };
  next();
});

server.get('/users/:id/groups', (req, res) => {
  const { id } = req.params;
  const groups = router.db
    .get('groups')
    .filter((item) => item.userId.includes(id))
    .value();
  res.jsonp(groups);
});

server.put('/groups/:id', (req, res, next) => {
  const { id } = req.params;
  const group = router.db.get('groups').find({ id }).value();
  req.body = { ...group, ...req.body };
  next();
});

server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});
