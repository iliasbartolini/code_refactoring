export default class OrderReceipt {

    constructor(o) {
        this._o = o;
    }


    printReceipt() {

        let receipt = this.header();

        // prints lineItems
        let totalSaleTax = 0.0;
        let totalAmount = 0.0;

        this._o.lineItems().forEach((lineItem) => {
            receipt += lineItem.description();
            receipt += "\t";
            receipt += lineItem.price();
            receipt += "\t";
            receipt += lineItem.quantity();
            receipt += "\t";
            receipt += lineItem.lineAmount();
            receipt += "\n";

            // calculate sales tax @ rate of 10%
            var salesTax = lineItem.lineAmount() * .10;
            totalSaleTax += salesTax;

            // calculate total amount of lineItem = price * quantity + 10 % sales tax
            totalAmount += lineItem.lineAmount() + salesTax;
        });
        receipt += this.footer(totalSaleTax, totalAmount);
        return receipt;
    }


    footer(totalSaleTax, totalAmount) {
        return "Sales Tax" + "\t" + totalSaleTax + "\n" +
               "Total Amount" + "\t" + totalAmount  + "\n" ;
    }

    header() {
        return "======Printing Orders======\n" +
            this._o.customerName() +
            this._o.customerAddress();
    }
}