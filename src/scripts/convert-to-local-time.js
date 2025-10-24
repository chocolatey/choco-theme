import { DateTime } from 'luxon';

const convertEventTimeToLocal = document.querySelectorAll('.convert-utc-to-local');
convertEventTimeToLocal.forEach(el => {
    const timeIncludeBreak = el.getAttribute('data-event-include-break');
    const timeOccurrence = el.getAttribute('data-event-occurrence');
    const definedDate = DateTime.fromISO(el.getAttribute('data-event-utc'));

    let timeIncludeBreakText;
    let timeOccurrenceText;

    if (timeIncludeBreak == 'true') {
        timeIncludeBreakText = '<br />';
    } else if (timeOccurrence == '-2' && definedDate <= DateTime.utc().toISO()) {
        timeIncludeBreakText = ' ';
    } else {
        timeIncludeBreakText = 'at ';
    }

    switch (timeOccurrence) {
        case '0':
            timeOccurrenceText = `Every ${definedDate.toLocal().toFormat('cccc')} ${timeIncludeBreakText}`;
            break;
        case '1':
            timeOccurrenceText = `First ${definedDate.toLocal().toFormat('cccc')} of Every Month ${timeIncludeBreakText}`;
            break;
        case '-1':
            timeOccurrenceText = `${definedDate.toLocal().toFormat('cccc, dd LLL yyyy')}${timeIncludeBreakText}`;
            break;
        case '-2':
            timeOccurrenceText = `${definedDate.toLocal().toFormat('cccc, dd LLL yyyy')} ${timeIncludeBreakText}`;
            break;
        default:
            timeOccurrenceText = '';
    }

    if (timeOccurrence) {
        if (timeOccurrence == '-2' && definedDate <= DateTime.utc().toISO()) {
            el.innerHTML = `Webinar Replay from${timeIncludeBreakText}${definedDate.toLocal().toFormat('cccc, dd LLL yyyy')}`;
        } else {
            el.innerHTML = `${timeOccurrenceText}${definedDate.toLocal().toFormat('h:mm a ZZZZ')} / ${definedDate.toUTC().toFormat('h:mm a ZZZZ')}`;
        }

        return;
    }

    el.innerHTML = `${definedDate.toLocal().toFormat('cccc, dd LLL yyyy ')}${timeIncludeBreakText}${definedDate.toLocal().toFormat('h:mm a ZZZZ')} / ${definedDate.toUTC().toFormat('h:mm a ZZZZ')}`;
});
