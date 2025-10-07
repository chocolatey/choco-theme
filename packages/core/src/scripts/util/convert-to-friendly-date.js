import { DateTime } from 'luxon';

export const convertToFriendlyDate = (oldDate, includeTime = false) => {
    let format;

    if (includeTime) {
        format = 'dd LLL yyyy HH:mm';
    } else {
        format = 'dd LLL yyyy';
    }

    return DateTime.fromISO(oldDate).toFormat(format);
};
