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
            receipt += lineItem.lineItemReceipt();

            totalSaleTax += lineItem.saleTax(lineItem);

            // calculate total amount of lineItem = price * quantity + 10 % sales tax
            totalAmount += lineItem.totalLineAmount(lineItem);
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