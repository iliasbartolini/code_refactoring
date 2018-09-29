import hello from "../app/hello";
import {expect} from "chai";

describe("Hello", function() {

  it("greets the world", function() {
    //put your name here
    var actual  = hello();

    expect(actual).to.equal("Hello, World");
  });

  it("greets you", function() {
    //put your name here
    var myName = "Ilias";

    var actual  = hello(myName);

    expect(actual).to.equal(`Hello, ${myName}`);
  });
  
});
