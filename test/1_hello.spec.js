import hello from "../app/1_hello/hello";
import {expect} from "chai";

describe("Hello", function () {

    it("greets the world", function () {
        const actual = hello();

        expect(actual).to.equal("Hello, World");
    });

    it("greets you", function () {
        const myName = "Ilias";

        const actual = hello(myName);

        expect(actual).to.equal(`Hello, ${myName}`);
    });

});
