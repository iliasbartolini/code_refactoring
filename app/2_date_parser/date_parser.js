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

        const  yearString = this._dateAndTimeString.substring(0, 4);
        if (yearString.length < 4) {
            throw new Error("Year string is less than 4 characters");
        }
        year = parseInt(yearString);
        if (isNaN(year)) {
            throw "Year is not an integer";
        }
        if (year < 2000 || year > 2020) {
            throw "Year cannot be less than 2000 or more than 2020";
        }

        const  monthString = this._dateAndTimeString.substring(5, 7);
        if (monthString.length < 2) {
            throw "Month string is less than 2 characters";
        }
        month = parseInt(monthString);
        if (isNaN(month)) {
            throw "Month is not an integer";
        }
        if (month < 1 || month > 12) {
            throw "Month cannot be less than 1 or more than 12";
        }

        const  dateString = this._dateAndTimeString.substring(8, 10);
        if (dateString.length < 2) {
            throw "Day string is less than 2 characters";
        }
        date = parseInt(dateString);
        if (isNaN(date)) {
            throw "Day is not an integer";
        }
        if (date < 1 || date > 31) {
            throw "Day cannot be less than 1 or more than 31";
        }


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