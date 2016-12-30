import chaiHttp = require("chai-http");
import * as chai from "chai";
import { createServer } from "restify";
import { addRoutes } from "./routes";

const expect = chai.expect;
const server = createServer();

addRoutes(server);
chai.use(chaiHttp);

describe("/users endpoint", () => {
  it("should create a new user", (done) => {
    chai.request(server)
      .post("/users")
      .send({
        name: "Lizzie",
      })
      .end((err, res) => {
        expect(res).to.have.status(500);
        done();
      });
  });
});
