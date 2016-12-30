import {assert} from "chai";
import {generateHello} from "./hello";

describe("generateHello()", () => {
  it("should error when a name contains a number", () => {
    const name = "Freddie12";
    const result = generateHello(name);
    assert.instanceOf(result, Error);
  });

  it("should error when a name contains a special character", () => {
    const name = "Freddie£";
    const result = generateHello(name);
    assert.instanceOf(result, Error);
  });

  it("should generate a welcome message if the name is alphabetic", () => {
      const name = "Freddie";
      const result = generateHello(name);
      assert.equal(result.message, "hello Freddie");
  });
});
