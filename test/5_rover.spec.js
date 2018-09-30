import {expect} from "chai";
import Rover from "../app/5_rover/rover";
import Position from "../app/5_rover/position";

describe("Rover", function() {

    it("navigates based on instructions", function() {
        const rover = new Rover(1, 1, "N");

        const resultPosition = rover.navigate("RMLM");

        expect(resultPosition).to.deep.equal(new Position(2, 2, "N"));
    });

});
