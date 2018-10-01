export default class OrderReceipt {

    constructor(o) {
        this._o = o;
    }


    printReceipt() {
        let output = "";

        // print headers
        output += "======Printing Orders======\n";

        // print date, bill no, customer name
//        output += "Date - " + order.date();
            output += this._o.customerName();
            output += this._o.customerAddress();
//        output += order.customerLoyaltyNumber();

        // prints lineItems
        let totSalesTx = 0.0;
        let tot = 0.0;

        this._o.lineItems().forEach((lineItem) => {
            output += lineItem.description();
            output += '\t';
            output += lineItem.price();
            output += '\t';
            output += lineItem.quantity();
            output += '\t';
            output += lineItem.totalAmount();
            output += '\n';

            // calculate sales tax @ rate of 10%
            var salesTax = lineItem.totalAmount() * .10;
            totSalesTx += salesTax;

            // calculate total amount of lineItem = price * quantity + 10 % sales tax
            tot += lineItem.totalAmount() + salesTax;
        });

        // prints the state tax
        output += "Sales Tax" + '\t' + totSalesTx;

        // print total amount
        output += "Total Amount" + '\t' + tot;
        return output.toString();    }
}