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
        return "Sales Tax" + "\t" + this._order.totalSaleTax() + "\n" +
               "Total Amount" + "\t" + this._order.totalAmount()  + "\n" ;
    }

}