import { createServer, Server } from "restify";
import * as hello from "./hello";

export const server: Server = createServer({name: "Node Hack"});
hello.addRoutes(server);

server.listen(8080, () => {
  console.log("%s listening at %s", server.name, server.url);
});
