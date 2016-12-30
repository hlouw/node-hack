import chaiHttp = require("chai-http");
import * as chai from "chai";
import {server} from "../src/app";

const expect = chai.expect;

chai.use(chaiHttp);

describe("/hello/:name endpoint", () => {
  it("should return a welcome message for a name with only alphabetic characters", (done) => {
    chai.request(server)
      .get("/hello/ed")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it("should 400 for a name with numeric characters", (done) => {
    chai.request(server)
      .get("/hello/ed1")
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });

  it("should 400 for a name with special characters", (done) => {
    chai.request(server)
      .get("/hello/ed£")
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
});
