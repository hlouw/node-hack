import chaiHttp = require("chai-http");
import * as chai from "chai";
import { bodyParser, createServer } from "restify";
import { addRoutes } from "./routes";

const expect = chai.expect;
const server = createServer();

server.use(bodyParser());

addRoutes(server);
chai.use(chaiHttp);

describe("/users endpoint", () => {
  it("should create a new user", (done) => {
    chai.request(server)
      .post("/users")
      .send({
        dob: new Date("1982-02-25"),
        email: "lizzie.parker@topshop.com",
        firstName: "Lizzie",
        lastName: "Parker",
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it("should 500 when the DB is not available", (done) => {
    chai.request(server)
      .post("/users")
      .send({
        dob: new Date("1986-02-23"),
        email: "ed.conolly@ovoenergy.com",
        firstName: "Ed",
        lastName: "Conolly",
      })
      .end((err, res) => {
        expect(res).to.have.status(500);
        done();
      });
  });

  xit("should 400 when the posted data misses a field", (done) => {
    chai.request(server)
      .post("/users")
      .send({
        dob: new Date("1986-02-23"),
        firstName: "Ed",
        lastName: "Conolly",
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
});
