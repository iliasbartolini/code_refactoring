import Position from "./position";

export default class Rover {

    constructor(x, y, direction) {
        this._position  = new Position(x, y, direction);
    }

    navigate(instructions) {

        for (let i = 0; i < instructions.length; i++) {
            let command = instructions.charAt(i);

            if(command === "M") {
                this._position.move();
            }

            if(command === "L") {
                this._position.turnLeft();
            }

            if(command === "R") {
                this._position.turnRight();
            }
        }

        return this._position;
    }

}