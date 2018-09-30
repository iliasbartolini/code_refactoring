export default class OrderReceipt {

    constructor(o) {
        this._o = o;
    }


    printReceipt() {

        let receipt = this.header();

        // prints lineItems
        this._o.lineItems().forEach((lineItem) => {
            receipt += lineItem.receiptLine();
        });

        receipt += this.footer();
        
        return receipt;
    }


    footer() {
        let totalSaleTax = 0.0;
        let totalAmount = 0.0;
        this._o.lineItems().forEach((lineItem) => {
            totalSaleTax += lineItem.saleTax(lineItem);
            totalAmount += lineItem.lineAmountWithTax(lineItem);
        });

        return "Sales Tax" + "\t" + totalSaleTax + "\n" +
               "Total Amount" + "\t" + totalAmount  + "\n" ;
    }

    header() {
        return "======Printing Orders======\n" +
            this._o.customerName() +
            this._o.customerAddress();
    }
}