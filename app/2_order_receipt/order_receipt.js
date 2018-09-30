export default class OrderReceipt {

    constructor(o) {
        this._o = o;
    }


    printReceipt() {

        let receipt = this.header();

        // prints lineItems
        let totalSaleTax = 0.0;
        let totalAmount = 0.0;

        function saleTax(lineItem) {
// calculate sales tax @ rate of 10%
            var salesTax = lineItem.lineAmount() * .10;
            return salesTax;
        }

        function totalLineAmount(lineItem) {
            return lineItem.lineAmount() + saleTax(lineItem);
        }

        function lineItemReceipt(lineItem) {
            let receiptLine = lineItem.description();
            receiptLine += "\t";
            receiptLine += lineItem.price();
            receiptLine += "\t";
            receiptLine += lineItem.quantity();
            receiptLine += "\t";
            receiptLine += lineItem.lineAmount();
            receiptLine += "\n";
            return receiptLine
        }

        this._o.lineItems().forEach((lineItem) => {
            receipt += lineItemReceipt(lineItem);

            totalSaleTax += saleTax(lineItem);

            // calculate total amount of lineItem = price * quantity + 10 % sales tax
            totalAmount += totalLineAmount(lineItem);
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