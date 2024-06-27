import { convertToFriendlyDate } from './convert-to-friendly-date';
import { convertToUtcTime } from './convert-to-utc-time';
import { setUtcTime } from './set-utc-time';

export const createExpirationDate = (termExpirationDateUtc, createdDateUtc, includeTime = false) => {
    if (termExpirationDateUtc) {
        let shortDate;

        if (termExpirationDateUtc.includes('T') && !includeTime) {
            shortDate = termExpirationDateUtc.substr(0, termExpirationDateUtc.indexOf('T'));
        } else {
            shortDate = termExpirationDateUtc;
        }

        shortDate = convertToUtcTime(shortDate, includeTime);

        if (!createdDateUtc) {
            createdDateUtc = '';
        }

        if (shortDate.toISO() <= convertToUtcTime(setUtcTime(), includeTime).toISO()) {
            return `<span class="fw-bold text-danger" data-created="${createdDateUtc}">${convertToFriendlyDate(termExpirationDateUtc, includeTime)}</span>`;
        }

        return `<span data-created="${createdDateUtc}">${convertToFriendlyDate(termExpirationDateUtc, includeTime)}</span>`;
    }

    return '';
};
