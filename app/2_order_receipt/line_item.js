export default class LineItem {

    constructor(desccription, price, quantity) {
        this._description = desccription;
        this._price = price;
        this._quantity = quantity;
    }

    quantity() {
        return this._quantity;
    }

    price() {
        return this._price;
    }

    description() {
        return this._description;
    }

    lineAmount() {
        return this._price * this._quantity;
    }

    saleTax() {
        const TAX_RATE_OF_10_PERCENT = 0.10;
        return this.lineAmount() * TAX_RATE_OF_10_PERCENT;
    }

    lineAmountWithTax() {
        return this.lineAmount() + this.saleTax();
    }

}