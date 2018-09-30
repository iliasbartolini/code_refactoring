export default class LineItem {

    constructor(desccription, price, quantity) {
        this._description = desccription;
        this._price = price;
        this._quantity = quantity;
    }

    description() {
        return this._description;
    }

    price() {
        return this._price;
    }

    quantity() {
        return this._quantity;
    }

    lineAmount() {
        return this._price * this._quantity;
    }

    saleTax() {
        const TAX_RATE_OF_10_PERCENT = 0.10;
        return this.lineAmount() * TAX_RATE_OF_10_PERCENT;
    }

    totalLineAmount() {
        return this.lineAmount() + this.saleTax();
    }

    receiptLine() {
        return  this.description() + "\t" + this.price() + "\t" + this.quantity() + "\t" +this.lineAmount() +"\n";
    }

}