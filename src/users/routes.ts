import { RequestHandler, Server } from "restify";

export function addRoutes(server: Server): void {
  server.post("/users", handleCreateUser);
}

const handleCreateUser: RequestHandler = (req, res) => {
  res.send(500);
};
