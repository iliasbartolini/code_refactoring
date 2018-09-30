import Position from "./position";

export default class Rover {

    constructor(x, y, direction) {
        this._x = x;
        this._y = y;
        this._direction = direction;
    }

    navigate(instructions) {

        for (let i = 0; i < instructions.length; i++) {
            let command = instructions.charAt(i);

            if(command === "M") {
                switch (this._direction) {
                    case "N":
                        this._y++;
                        break;
                    case "S":
                        this._y--;
                        break;
                    case "E":
                        this._x++;
                        break;
                    case "W":
                        this._x--;
                        break;
                }
            }

            if(command === "L") {
                switch (this._direction) {
                    case "N":
                        this._direction = "W";
                        break;
                    case "S":
                        this._direction = "E";
                        break;
                    case "E":
                        this._direction = "N";
                        break;
                    case "W":
                        this._direction = "S";
                        break;
                }
            }

            if(command === "R") {
                switch (this._direction) {
                    case "N":
                        this._direction = "E";
                        break;
                    case "S":
                        this._direction = "W";
                        break;
                    case "E":
                        this._direction = "N";
                        break;
                    case "W":
                        this._direction = "S";
                        break;
                }
            }
        }

        return new Position(this._x, this._y, this._direction);

    }

}