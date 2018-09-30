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
        year = this._validate(yearString, 4, 2000, 2020, "Year");

        const  monthString = this._dateAndTimeString.substring(5, 7);
        month = this._validate(monthString, 2, 1, 12, "Month");

        const  dateString = this._dateAndTimeString.substring(8, 10);
        date = this._validate(dateString, 2, 1, 31, "Day");

        if (this._dateAndTimeString.substring(10, 11) === "Z") {
            hour = 0;
            minute = 0;
        } else {

            const  hourString = this._dateAndTimeString.substring(11, 13);
            hour = this._validate(hourString, 2, 0, 23, "Hour");

            const  minuteString = this._dateAndTimeString.substring(14, 16);
            minute = this._validate(minuteString, 2, 0, 59, "Minute");
        }

        return new Date(Date.UTC(year, month - 1, date, hour, minute));
    }

    _extractStringValue(startPosition, endPosition) {
        return this._dateAndTimeString.substring(startPosition, endPosition);
    }

    _validate(stringValue, minLength, minValue, maxValue, fieldName) {
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