export default class Order {

    constructor(nm, addr ,li ) {
        this._nm = nm;
        this._addr = addr;
        this._li = li;
    }

    customerName() {
        return this._nm;
    }

    customerAddress() {
        return this._addr;
    }

    lineItems() {
        return this._li;
    }

}