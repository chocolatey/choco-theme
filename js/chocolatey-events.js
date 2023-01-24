import jQuery from 'jquery';
import { DateTime } from 'luxon';

(() => {
    const countdownDateTime = jQuery('.countdown-date-time');
    const countdownReoccurringDateTime = document.querySelector('.reoccurring-date-time');
    const countdownContainer = jQuery('.countdown-container');
    const ellapsedButtonText = 'Watch On-Demand Now';
    const countdownContainerTime = '<div><div>%D</div><p class="text-dark">Days</p></div><div><div>%H</div><p class="text-dark">Hours</p></div><div><div>%M</div><p class="text-dark">Minutes</p></div><div><div>%S</div><p class="text-dark">Seconds</p></div>';

    const setReoccurringCountdownTimer = () => {
        let rDay = document.querySelector('.reoccurring-date-day').value;

        const rDate = document.querySelector('.reoccurring-date-date').value;
        const rMonth = document.querySelector('.reoccurring-date-month').value;
        const rHour = document.querySelector('.reoccurring-date-hour').value;
        const rMinutes = document.querySelector('.reoccurring-date-minutes').value;
        const rYear = document.querySelector('.reoccurring-date-year').value;
        const rNext = document.querySelector('.reoccurring-date-next');
        const rInterval = document.querySelector('.reoccurring-interval').value;

        switch (rDay) {
            case 'Monday':
                rDay = 1;
                break;
            case 'Tuesday':
                rDay = 2;
                break;
            case 'Wednesday':
                rDay = 3;
                break;
            case 'Thursday':
                rDay = 4;
                break;
            case 'Friday':
                rDay = 5;
                break;
        };

        const minDate = DateTime.utc(parseInt(rYear), parseInt(rMonth), parseInt(rDate), parseInt(rHour), parseInt(rMinutes));
        const reoccurringDate = DateTime.utc().set({ weekday: rDay, hour: rHour, minutes: rMinutes, seconds: '00', milliseconds: '00' });

        const setReoccurringCountdown = countdownToDate => {
            countdownContainer.countdown(countdownToDate, e => {
                if (e.elapsed) {
                    // Go back and check for more times
                    setReoccurringCountdownTimer();
                } else {
                    // Show time
                    countdownContainer.html(e.strftime(countdownContainerTime));
                };
            });
        };

        // TODO: Add in checks for varying intervals. Example: every week vs. every other week event
        if (rInterval == '-2' && minDate.toISO() <= DateTime.utc().toISO()) {
            // Single event, time elapsed
            replaceElapsed();
        } else if (minDate.toISO() >= DateTime.utc().toISO()) {
            // Set to min date
            setReoccurringCountdown(`${minDate.toFormat('yyyy/MM/dd HH:mm:ss')} UTC`);
        } else if (reoccurringDate.toISO() >= DateTime.utc().toISO()) {
            setReoccurringCountdown(`${reoccurringDate.toFormat('yyyy/MM/dd HH:mm:ss')} UTC`);
            rNext.innerText = reoccurringDate.toFormat('cccc, dd LLL yyyy');
        } else {
            // Add days to reoccurringDate
            setReoccurringCountdown(`${reoccurringDate.plus({ days: rInterval }).toFormat('yyyy/MM/dd HH:mm:ss')} UTC`);
            rNext.innerText = reoccurringDate.plus({ days: rInterval }).toFormat('cccc, dd LLL yyyy');
        }
    };

    const getUTCNow = eventDate => {
        const now = new Date(eventDate);
        const time = now.getTime();

        let offset = now.getTimezoneOffset();

        offset = offset * 60000;

        return time - offset;
    };

    const replaceElapsed = () => {
        jQuery('.countdown-details').add(countdownContainer).add(jQuery('.countdown-date')).add(jQuery('.btn-not-on-demand')).remove();
        jQuery('a:not(.btn-sidebar), h3').each((index, element) => {
            jQuery(element).html(jQuery(element).html()
                .replace('Reserve My Spot Now', ellapsedButtonText)
                .replace('Register Now', ellapsedButtonText)
                .replace('Register', ellapsedButtonText)
                .replace('Join Us Live On', 'Watch The Replays On')
                .replace('Click Here to Register', ellapsedButtonText));
        });
    };

    const setCountdownTimer = () => {
        jQuery.each(countdownDateTime, (index, element) => {
            const upcomingEventTime = jQuery(element).val();
            const eventListingContainer = jQuery(element).parent();
            const eventListingContainerOnDemand = eventListingContainer.find('.btn-on-demand');

            if (getUTCNow(upcomingEventTime) < getUTCNow(new Date())) {
                // Individual event complete
                eventListingContainer.find('.calendar-date').css('opacity', '.5');
                eventListingContainer.find('.btn:not(".btn-on-demand"):not(".btn-replay")').addClass('disabled');
                if (eventListingContainerOnDemand.length > 0) {
                    eventListingContainerOnDemand.html(eventListingContainerOnDemand.html().replace(eventListingContainerOnDemand.html(), ellapsedButtonText));
                }
                // If all times are past (event over)
                if (index == countdownDateTime.length - 1) {
                    jQuery('#countdown-header.countdown-multi-event section').removeClass('pb-5').addClass('pb-3 pb-lg-5');
                    jQuery('#countdown-header.countdown-single-event section').removeClass('pb-5').addClass('pb-0');
                    replaceElapsed();
                }
            }
        });
    };

    if (countdownDateTime.length) {
        setCountdownTimer();
    }

    if (countdownReoccurringDateTime) {
        setReoccurringCountdownTimer();
    }
})();
