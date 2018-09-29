import hello from "../app/hello";
import {expect} from "chai";

describe("Hello", function() {
  it("greets you", function() {
    var actual  = hello();

    expect(actual).to.equal("Hello, World");
  });
});
