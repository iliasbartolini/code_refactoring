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

    lineAmount() {
        return this._p * this._qty;
    }

    saleTax() {
        const TAX_RATE_OF_10_PERCENT = 0.10;
        return this.lineAmount() * TAX_RATE_OF_10_PERCENT;
    }

    totalLineAmount() {
        return this.lineAmount() + this.saleTax();
    }

    lineItemReceipt() {
        return  this.description() + "\t" + this.price() + "\t" + this.quantity() + "\t" +this.lineAmount() +"\n";
    }

}