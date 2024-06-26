import { DateTime } from 'luxon';

export const convertToUtcTime = (oldDate, includeTime = false) => {
    if (!includeTime) {
        oldDate = oldDate.split('-');
        return DateTime.utc(parseInt(oldDate[0]), parseInt(oldDate[1]), parseInt(oldDate[2]));
    } else {
        const [datePart, timePartWithOffset] = oldDate.split('T');
        const [timePart] = timePartWithOffset.split(/[+\-Z]/);
        const [hours, minutes] = timePart.split(':');
        oldDate = datePart.split('-');

        return DateTime.utc(parseInt(oldDate[0]), parseInt(oldDate[1]), parseInt(oldDate[2]), parseInt(hours), parseInt(minutes));
    }
};
