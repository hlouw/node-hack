import {assert} from "chai";
import {generateHello} from "./hello";

describe("generateHello()", () => {
  it("should error when a name contains a number", () => {
    // Arrange.
    const name = "Freddie12";

    // Act.
    const result = generateHello(name);

    // Assert.
    assert.instanceOf(result, Error);
  });

  it("should error when a name contains a special character", () => {
    // Arrange.
    const name = "Freddie£";

    // Act.
    const result = generateHello(name);

    // Assert.
    assert.instanceOf(result, Error);
  })

  it("should generate a welcome message if the name is alphabetic", () => {
      // Arrange.
      const name = "Freddie";

      // Act.
      const result = generateHello(name);

      // Assert.
      assert.equal(result.message, "hello Freddie");
  })
});