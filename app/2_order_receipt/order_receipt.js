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
            receipt += lineItem.receiptLine();

            totalSaleTax += lineItem.saleTax(lineItem);

            totalAmount += lineItem.lineAmountWithTax(lineItem);
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