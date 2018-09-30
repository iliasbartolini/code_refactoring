export default class OrderReceipt {

    constructor(o) {
        this._o = o;
    }


    printReceipt() {
        return this.printHeader() + this.printLineItems() + this.printFooter();
    }


    printHeader() {
        return "======Printing Orders======\n" +
            this._o.customerName() +
            this._o.customerAddress();
    }

    printLineItems() {
        let lineItemsReceipt = "";
        this._o.lineItems().forEach((lineItem) => {
            lineItemsReceipt += lineItem.receiptLine();
        });
        return lineItemsReceipt;
    }

    printFooter() {
        let totalSaleTax = 0.0;
        let totalAmount = 0.0;
        this._o.lineItems().forEach((lineItem) => {
            totalSaleTax += lineItem.saleTax(lineItem);
            totalAmount += lineItem.lineAmountWithTax(lineItem);
        });

        return "Sales Tax" + "\t" + totalSaleTax + "\n" +
               "Total Amount" + "\t" + totalAmount  + "\n" ;
    }
}