export default class Position {

    constructor(x, y, direction) {
        this._x = x;
        this._y = y;
        this._direction = direction;
    }

    turnRight() {
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

    turnLeft() {
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