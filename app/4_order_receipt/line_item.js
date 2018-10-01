export default class LineItem {

    constructor(desc, p, qty) {
        this._desc = desc;
        this._p = p;
        this._qty = qty;
    }

    description() {
        return this._desc;
    }

    price() {
        return this._p;
    }

    quantity() {
        return this._qty;
    }

    totalAmount() {
        return this._p * this._qty;
    }

}