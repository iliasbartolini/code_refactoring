export default class DateParser {

    /**
     * Takes a date in ISO 8601 format and returns a date
     *
     * dateAndTimeString - should be in format ISO 8601 format
     *     examples -
     *     2012-06-17 is 17th June 2012 - 00:00 in UTC TimeZone
     *     2012-06-17TZ is 17th June 2012 - 00:00 in UTC TimeZone
     *     2012-06-17T15:00Z is 17th June 2012 - 15:00 in UTC TimeZone
     */

    constructor(dateAndTimeString) {
        this._dateAndTimeString = dateAndTimeString;
    }

    parse() {

        const year  = new FieldValidation("Year", 0, 4, 2000, 2020).validate(this._dateAndTimeString);
        const month = new FieldValidation("Month", 5, 7, 1, 12).validate(this._dateAndTimeString);
        const date  = new FieldValidation("Day", 8, 10, 1, 31).validate(this._dateAndTimeString);

        let hour, minute;
        if (this._dateAndTimeString.substring(10, 11) === "Z") {
            hour = 0;
            minute = 0;
        } else {
            hour   = new FieldValidation("Hour", 11, 13, 0, 23).validate(this._dateAndTimeString);
            minute = new FieldValidation("Minute", 14, 16, 0, 59).validate(this._dateAndTimeString);
        }

        return new Date(Date.UTC(year, month - 1, date, hour, minute));
    }

}

class FieldValidation {
    constructor(name, start, end, min, max) {
        this._name = name;
        this._start = start;
        this._end = end;
        this._min = min;
        this._max = max;
    }

    validate(containingString) {
        const stringValue = this._extractStringValue(containingString);
        return this._validateIntegerWithinMinMax(stringValue);
    }

    _extractStringValue(containingString) {
        const stringValue = containingString.substring(this._start, this._end);
        const minLength = this._end - this._start;
        if (stringValue.length < minLength) {
            throw new Error(`${this._name} string is less than ${minLength} characters`);
        }
        return stringValue
    }

    _validateIntegerWithinMinMax(stringValue) {
        let integerValue = parseInt(stringValue);
        if (isNaN(integerValue)) {
            throw `${this._name} is not an integer`;
        }
        if (integerValue < this._min || integerValue > this._max) {
            throw `${this._name} cannot be less than ${this._min} or more than ${this._max}`;
        }
        return integerValue
    }

}