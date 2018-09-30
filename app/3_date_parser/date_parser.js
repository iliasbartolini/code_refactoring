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

    validate(stringValue, minLength, minValue, maxValue, fieldName) {
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


    parse() {
        let year, month, date, hour, minute;

        const  yearString = this._dateAndTimeString.substring(0, 4);
        year = this.validate(yearString, 4, 2000, 2020, "Year");

        const  monthString = this._dateAndTimeString.substring(5, 7);
        month = this.validate(monthString, 2, 1, 12, "Month");

        const  dateString = this._dateAndTimeString.substring(8, 10);
        date = this.validate(dateString, 2, 1, 31, "Day");

        if (this._dateAndTimeString.substring(10, 11) === "Z") {
            hour = 0;
            minute = 0;
        } else {

            const  hourString = this._dateAndTimeString.substring(11, 13);
            if (hourString.length < 2) {
                throw "Hour string is less than 2 characters";
            }
            hour = parseInt(hourString);
            if (isNaN(hour)) {
                throw "Hour is not an integer";
            }
            if (hour < 0 || hour > 23) {
                throw "Hour cannot be less than 0 or more than 23";
            }

            const  minuteString = this._dateAndTimeString.substring(14, 16);
            if (minuteString.length < 2) {
                throw "Minute string is less than 2 characters";
            }
            minute = parseInt(minuteString);
            if (isNaN(minute)) {
                throw "Minute is not an integer";
            }
            if (minute < 0 || minute > 59) {
                throw "Minute cannot be less than 0 or more than 59";
            }

        }

        return new Date(Date.UTC(year, month - 1, date, hour, minute));
    }

}