export default class OrderReceipt {

    constructor(order) {
        this._order = order;
    }


    printReceipt() {
        return this.printHeader() + this.printLineItems() + this.printFooter();
    }


    printHeader() {
        return "======Printing Orders======\n" +
            this._order.customerName() +
            this._order.customerAddress();
    }

    printLineItems() {
        let lineItemsReceipt = "";
        this._order.lineItems().forEach((lineItem) => {
            lineItemsReceipt += lineItem.receiptLine();
        });
        return lineItemsReceipt;
    }

    printFooter() {
        let totalSaleTax = 0.0;
        let totalAmount = 0.0;

        this._order.lineItems().forEach((lineItem) => {
            totalSaleTax += lineItem.saleTax(lineItem);
            totalAmount += lineItem.lineAmountWithTax(lineItem);
        });

        return "Sales Tax" + "\t" + totalSaleTax + "\n" +
               "Total Amount" + "\t" + totalAmount  + "\n" ;
    }
}