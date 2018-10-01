import LineItem from "../app/4_order_receipt/line_item";
import Order from "../app/4_order_receipt/order";
import OrderReceipt from "../app/4_order_receipt/order_receipt";
import {expect} from "chai";

describe("OrderReceipt", function() {

    it("print customer information on order", function() {
        const order = new Order("Mr X", "Chicago, 60601", []);
        const receipt = new OrderReceipt(order);

        const output = receipt.printReceipt();

        expect(output).to.include("Mr X");
        expect(output).to.include("Chicago, 60601");
    });

    it("should print line item and sales tax", function() {
        const items = [
            new LineItem("milk", 10.0, 2),
            new LineItem("biscuits", 5.0, 5),
            new LineItem("chocolate", 20.0, 1)
        ];
        const order = new Order("", "", items);
        const receipt = new OrderReceipt(order);

        const output = receipt.printReceipt();

        expect(output).to.include("milk\t10\t2\t20\n");
        expect(output).to.include("biscuits\t5\t5\t25\n");
        expect(output).to.include("chocolate\t20\t1\t20\n");
        expect(output).to.include("Sales Tax\t6.5");
        expect(output).to.include("Total Amount\t71.5");
    });

});
