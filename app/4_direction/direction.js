export default class Direction {

    constructor(direction) {
        this._direction = direction;
    }

    turnRight() {
        return this._nextDirection(Direction._rightOrderedDirections);
    }

    turnLeft() {
        return this._nextDirection(Direction._leftOrderedDirections);
    }

    _nextDirection(orderedLookup) {
        const currentDirectionIndex = orderedLookup.indexOf(this._direction);
        const newDirectionIndex = (currentDirectionIndex + 1) % orderedLookup.length;
        const newDirection = orderedLookup[newDirectionIndex];
        return new Direction(newDirection);
    }

}

Direction._rightOrderedDirections = ["N", "E", "S", "W"];
Direction._leftOrderedDirections = Direction._rightOrderedDirections.slice(0).reverse();


