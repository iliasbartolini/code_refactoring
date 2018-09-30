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

}