import { Server, createServer } from 'restify';
import * as hello from './hello';

const server: Server = createServer();
hello.addRoutes(server);

server.listen(8080, () => {
  console.log('%s listening at %s', server.name, server.url);
});
