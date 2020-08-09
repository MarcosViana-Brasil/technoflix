/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.POR || 8000;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running in ${port}`);
});
