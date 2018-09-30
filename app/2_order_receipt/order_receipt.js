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
        return this._order.lineItems()
            .map((lineItem) => lineItem.description() + "\t" + lineItem.price() + "\t" + lineItem.quantity() + "\t" +lineItem.lineAmount() +"\n")
            .reduce((a, b) => a + b, "");
    }

    printFooter() {
        return "Sales Tax" + "\t" + this._order.totalSaleTax() + "\n" +
               "Total Amount" + "\t" + this._order.totalAmount()  + "\n" ;
    }

}