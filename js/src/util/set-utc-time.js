import { DateTime } from 'luxon';

export const setUtcTime = (addDays = 0, addYears = 0, oldDate) => {
    let newDate = '';

    if (!oldDate) {
        newDate = DateTime.utc().plus({ days: addDays, years: addYears }).toString();
    } else {
        oldDate = oldDate.substr(0, oldDate.indexOf('T'));
        oldDate = oldDate.split('-');

        newDate = DateTime.utc(parseInt(oldDate[0]), parseInt(oldDate[1]), parseInt(oldDate[2])).plus({ days: addDays, years: addYears }).toString();
    }

    return newDate;
};
