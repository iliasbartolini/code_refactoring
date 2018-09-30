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

        const year  = this._extractAndValidate("Year", 0, 4, 2000, 2020);
        const month = this._extractAndValidate("Month", 5, 7, 1, 12);
        const date  = this._extractAndValidate("Day", 8, 10, 1, 31);

        let hour, minute;
        if (this._dateAndTimeString.substring(10, 11) === "Z") {
            hour = 0;
            minute = 0;
        } else {
            hour   = this._extractAndValidate("Hour", 11, 13, 0, 23);
            minute = this._extractAndValidate("Minute", 14, 16, 0, 59);
        }

        return new Date(Date.UTC(year, month - 1, date, hour, minute));
    }

    _extractAndValidate(fieldName, startPosition, endPosition, minValue, maxValue) {
        const stringValue = this._extractStringValue(fieldName, startPosition, endPosition);
        return this._validateIntegerWithinMinMax(fieldName, minValue, maxValue, stringValue);
    }

    _extractStringValue(fieldName, startPosition, endPosition) {
        const stringValue = this._dateAndTimeString.substring(startPosition, endPosition);
        const minLength = endPosition - startPosition;
        if (stringValue.length < minLength) {
            throw new Error(`${fieldName} string is less than ${minLength} characters`);
        }
        return stringValue
    }

    _validateIntegerWithinMinMax(fieldName, minValue, maxValue, stringValue) {
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