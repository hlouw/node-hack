import { Server, RequestHandler } from 'restify';
import { reallyHandleHello } from './hello';

export function addRoutes(server: Server): void {
  server.get('/hello/:name', handleHello);
  server.head('/hello/:name', handleHello);
}

function isError(result: string | Error): result is Error {
  return (result instanceof Error);
}

const handleHello: RequestHandler = (req, res) => {
  let result = reallyHandleHello(req.params.name);

  if (isError(result)) {
    res.send(400, result.message);
  } else {
    res.send(result);
  }
}
