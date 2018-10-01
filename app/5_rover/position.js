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
        this._x += Position.xMoveLookup[this._direction];
        this._y += Position.yMoveLookup[this._direction];
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

Position.xMoveLookup = {
    "N" : 0,
    "W" : -1,
    "S" : 0,
    "E" : +1
};

Position.yMoveLookup = {
    "N" : +1,
    "W" : 0,
    "S" : -1,
    "E" : 0
};