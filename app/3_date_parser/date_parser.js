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
        let year, month, date, hour, minute;

        const  yearString = this._extractStringValue(0, 4);
        year = this._validate("Year", 4, 2000, 2020, yearString);

        const  monthString = this._dateAndTimeString.substring(5, 7);
        month = this._validate("Month", 2, 1, 12, monthString);

        const  dateString = this._dateAndTimeString.substring(8, 10);
        date = this._validate("Day", 2, 1, 31, dateString);

        if (this._dateAndTimeString.substring(10, 11) === "Z") {
            hour = 0;
            minute = 0;
        } else {

            const  hourString = this._dateAndTimeString.substring(11, 13);
            hour = this._validate("Hour", 2, 0, 23, hourString);

            const  minuteString = this._dateAndTimeString.substring(14, 16);
            minute = this._validate("Minute", 2, 0, 59, minuteString);
        }

        return new Date(Date.UTC(year, month - 1, date, hour, minute));
    }

    _extractStringValue(startPosition, endPosition) {
        return this._dateAndTimeString.substring(startPosition, endPosition);
    }

    _validate(fieldName, minLength, minValue, maxValue, stringValue) {
        if (stringValue.length < minLength) {
            throw new Error(`${fieldName} string is less than ${minLength} characters`);
        }
        let integerValue = parseInt(stringValue);
        if (isNaN(integerValue)) {
            throw `${fieldName} is not an integer`;
        }
        if (integerValue < minValue || integerValue > maxValue) {
            throw `${fieldName} cannot be less than ${minValue} or more than ${maxValue}`;
        }
        return integerValue
    }
}