export default class OrderReceipt {

    constructor(o) {
        this._o = o;
    }


    printReceipt() {

        let receipt = this.header();

        // prints lineItems
        let totSalesTx = 0.0;
        let tot = 0.0;

        this._o.lineItems().forEach((lineItem) => {
            receipt += lineItem.description();
            receipt += '\t';
            receipt += lineItem.price();
            receipt += '\t';
            receipt += lineItem.quantity();
            receipt += '\t';
            receipt += lineItem.totalAmount();
            receipt += '\n';

            // calculate sales tax @ rate of 10%
            var salesTax = lineItem.totalAmount() * .10;
            totSalesTx += salesTax;

            // calculate total amount of lineItem = price * quantity + 10 % sales tax
            tot += lineItem.totalAmount() + salesTax;
        });
        receipt += this.footer(totSalesTx, tot);
        return receipt;
    }


    footer(totSalesTx, tot) {
// prints the state tax
        let footer = "Sales Tax" + '\t' + totSalesTx;

        // print total amount
        footer += "Total Amount" + '\t' + tot;
        return footer;
    }

    header() {
        return "======Printing Orders======\n" +
            this._o.customerName() +
            this._o.customerAddress();
    }
}