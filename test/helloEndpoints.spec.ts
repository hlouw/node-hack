import chaiHttp = require("chai-http");
import * as chai from "chai";
import {server} from "../src/app";

const expect = chai.expect;

chai.use(chaiHttp);

describe("/hello/:name endpoint", () => {
  it("should return a welcome message for a name with only alphabetic characters", () => {
    chai.request(server)
      .get("/hello/ed")
      .then((res) => {
        expect(res).to.have.status(200);
      })
      .catch((err) => {
        throw err;
      });
  });

  it("should error for a name with numeric characters");
  it("should error for a name with special characters");
});
