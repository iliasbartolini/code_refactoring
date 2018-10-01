import {expect} from "chai";
import DateParser from "../app/2_date_parser/date_parser";

describe("DateParser", function() {

    it("parses a valid date", function() {
        const expected = new Date(Date.UTC(2018, 9 - 1, 24, 0, 0, 0));

        const result = new DateParser("2018-09-24Z").parse();

        expect(result).to.deep.equal(expected);
    });

    it("parses a valid date time", function() {
        const expected = new Date(Date.UTC(2018, 9 - 1, 24, 23, 59, 0));

        const result = new DateParser("2018-09-24T23:59Z").parse();

        expect(result).to.deep.equal(expected);
    });

    it("throws exception if year string cannot be parsed", function() {
        const dateParser = new DateParser("111");

        expect(() => dateParser.parse()).to.throw("Year string is less than 4 characters");
    });

    it("throws exception if year is not an integer", function() {
        const dateParser = new DateParser("abcd");

        expect(() => dateParser.parse()).to.throw("Year is not an integer");
    });

    it("throws exception if year is less than 2000", function() {
        const dateParser = new DateParser("1999");

        expect(() => dateParser.parse()).to.throw("Year cannot be less than 2000 or more than 2020");
    });

    it("throws exception if month string cannot be parsed", function() {
        const dateParser = new DateParser("2012-1");

        expect(() => dateParser.parse()).to.throw("Month string is less than 2 characters");
    });

    it("throws exception if month is not an integer", function() {
        const dateParser = new DateParser("2012-Sep");

        expect(() => dateParser.parse()).to.throw("Month is not an integer");
    });

    it("throws exception if month is more than 12", function() {
        const dateParser = new DateParser("2012-13");

        expect(() => dateParser.parse()).to.throw("Month cannot be less than 1 or more than 12");
    });
    
    it("throws exception if day string cannot be parsed", function() {
        const dateParser = new DateParser("2012-12-1");

        expect(() => dateParser.parse()).to.throw("Day string is less than 2 characters");
    });

    it("throws exception if day is not an integer", function() {
        const dateParser = new DateParser("2012-12-Sun");

        expect(() => dateParser.parse()).to.throw("Day is not an integer");
    });

    it("throws exception if day is more than 31", function() {
        const dateParser = new DateParser("2012-12-32");

        expect(() => dateParser.parse()).to.throw("Day cannot be less than 1 or more than 31");
    });


    it("throws exception if hour string cannot be parsed", function() {
        const dateParser = new DateParser("2012-12-31T0");

        expect(() => dateParser.parse()).to.throw("Hour string is less than 2 characters");
    });

    it("throws exception if hour is not an integer", function() {
        const dateParser = new DateParser("2012-12-31Tab");

        expect(() => dateParser.parse()).to.throw("Hour is not an integer");
    });

    it("throws exception if hour is more than 12", function() {
        const dateParser = new DateParser("2012-12-31T24");

        expect(() => dateParser.parse()).to.throw("Hour cannot be less than 0 or more than 23");
    });


    it("throws exception if minute string cannot be parsed", function() {
        const dateParser = new DateParser("2012-12-31T01:1");

        expect(() => dateParser.parse()).to.throw("Minute string is less than 2 characters");
    });

    it("throws exception if minute is not an integer", function() {
        const dateParser = new DateParser("2012-12-31T01:ab");

        expect(() => dateParser.parse()).to.throw("Minute is not an integer");
    });

    it("throws exception if minute is more than 12", function() {
        const dateParser = new DateParser("2012-12-31T01:60");

        expect(() => dateParser.parse()).to.throw("Minute cannot be less than 0 or more than 59");
    });

});
