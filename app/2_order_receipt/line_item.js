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
// calculate sales tax @ rate of 10%
        var salesTax = this.lineAmount() * .10;
        return salesTax;
    }

    totalLineAmount() {
        return this.lineAmount() + this.saleTax();
    }

    lineItemReceipt() {
        let receiptLine = this.description();
        receiptLine += "\t";
        receiptLine += this.price();
        receiptLine += "\t";
        receiptLine += this.quantity();
        receiptLine += "\t";
        receiptLine += this.lineAmount();
        receiptLine += "\n";
        return receiptLine
    }

}