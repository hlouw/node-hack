import { RequestHandler, Server } from "restify";
import * as domain from "./save-user";

export function addRoutes(server: Server): void {
  server.post("/users", handleCreateUser);
}

const handleCreateUser: RequestHandler = (req, res) => {
  // @TODO add validation. What's the plan here?

  const result: Promise<User> = domain.saveUser(mapUserFromApiToDomain(req.body))
    .then(mapUserFromDomainToApi);

  result
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.send(500);
    });
};

const mapUserFromDomainToApi = (user: domain.User): User => {
    const names = user.name.split(" ");
    return {
      dob: user.dob,
      email: user.email,
      firstName: names[0],
      lastName: names[1],
    };
};

const mapUserFromApiToDomain = (user: User): domain.User => {
  return {
    dob: user.dob,
    email: user.email,
    name: user.firstName + " " + user.lastName,
  };
};

interface User {
  firstName: string;
  lastName: string;
  dob: Date;
  email: string;
};

