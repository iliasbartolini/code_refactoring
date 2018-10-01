export default class Position {

    constructor(x, y, direction) {
        this._x = x;
        this._y = y;
        this._direction = direction;
    }

    turnRight() {
        this._direction = Position.turnRightLookup[this._direction];
    }

    turnLeft() {
        this._direction = Position.turnLeftLookup[this._direction];
    }

    move() {
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
}

Position.turnRightLookup = {
    "N" : "E",
    "E" : "S",
    "S" : "W",
    "W" : "N"
};

Position.turnLeftLookup = {
    "N" : "W",
    "W" : "S",
    "S" : "E",
    "E" : "N"
};