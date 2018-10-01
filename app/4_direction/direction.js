export default class Direction {

    constructor(direction) {
        this._direction = direction;
    }


    turnRight() {
        const newDirection = Direction._turnRightLookup[this._direction];
        return new Direction(newDirection);
    }

    turnLeft() {
        const newDirection = Direction._turnLeftLookup[this._direction];
        return new Direction(newDirection);
    }

}

Direction._turnLeftLookup = {
    "N": "W",
    "E": "N",
    "S": "E",
    "W": "S"
};

Direction._turnRightLookup = {
    "N": "E",
    "E": "S",
    "S": "W",
    "W": "N"
};
