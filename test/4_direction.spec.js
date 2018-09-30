import {expect} from "chai";
import Direction from "../app/4_direction/direction";

describe("Direction", function() {

    it("returns east when turn right from north", function() {
        const east = new Direction("E");
        const north = new Direction("N");

        const result = north.turnRight();


        expect(result).to.deep.equal(east);
    });

    it("returns west when turn left from north", function() {
        const west = new Direction("W");
        const north = new Direction("N");

        const result = north.turnLeft();


        expect(result).to.deep.equal(west);
    });


    it("returns north when turn left from east", function() {
        const east = new Direction("E");
        const north = new Direction("N");

        const result = east.turnLeft();


        expect(result).to.deep.equal(north);
    });


    it("returns the same direction when turning left and then right", function() {
        const east = new Direction("E");

        const result = east.turnLeft().turnRight();

        expect(result).to.deep.equal(east);
    });


});
