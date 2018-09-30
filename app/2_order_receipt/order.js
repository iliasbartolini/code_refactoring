export default class Order {

    constructor(customerName, customerAddress ,lineItems ) {
        this._customerName = customerName;
        this._customerAddress = customerAddress;
        this._lineItems = lineItems;
    }

    customerName() {
        return this._customerName;
    }

    customerAddress() {
        return this._customerAddress;
    }

    lineItems() {
        return this._lineItems;
    }

    totalAmount() {
        return this._lineItems
            .map((lineItem) => lineItem.lineAmountWithTax())
            .reduce((a, b) => a + b, 0);
    }

    totalSaleTax() {
        return this._lineItems
            .map((lineItem) => lineItem.saleTax())
            .reduce((a, b) => a + b, 0);
    }

}