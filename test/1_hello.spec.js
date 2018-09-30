import prints_output from "../app/1_hello/hello";
import {expect} from "chai";

describe("Hello", function () {

    it("greets the world", function () {
        const actual = prints_output();

        expect(actual).to.equal("Hello, World");
    });

    xit("greets you", function () {
        const myName = "Ilias";

        const actual = prints_output(myName);

        expect(actual).to.equal(`Hello, ${myName}`);
    });

});
