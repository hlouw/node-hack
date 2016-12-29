import { RequestHandler, createServer } from 'restify';

const respond: RequestHandler = (req, res, next) => {
  res.send('hello there, ' + req.params.name);
  next();
}

const server = createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, () => {
  console.log('%s listening at %s', server.name, server.url);
});
