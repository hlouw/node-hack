import { Server, RequestHandler } from 'restify';
import { generateHello, Welcome } from './hello';

export function addRoutes(server: Server): void {
  server.get('/hello/:name', handleHelloRoute);
  server.head('/hello/:name', handleHelloRoute);
}

const handleHelloRoute: RequestHandler = (req, res) => {
  const result = generateHello(req.params.name);

  if (result instanceof Error) {
    res.send(400, result.message);
  } else {
    res.json(result);
  }
}
