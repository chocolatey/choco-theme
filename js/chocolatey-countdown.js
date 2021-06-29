(function() {
    var countdownDateTime = jQuery('.countdown-date-time'),
        countdownReoccurringDateTime = document.querySelector('.reoccurring-date-time'),
        countdownContainer = jQuery('.countdown-container'),
        ellapsedButtonText = 'Watch On-Demand Now',
        countdownContainerTime = '<div><div>%D</div><p class="text-dark">Days</p></div><div><div>%H</div><p class="text-dark">Hours</p></div><div><div>%M</div><p class="text-dark">Minutes</p></div><div><div>%S</div><p class="text-dark">Seconds</p></div>';

    if (countdownDateTime.length) {
        setCountdownTimer();
    }

    if (countdownReoccurringDateTime) {
        setReoccurringCountdownTimer();
    }

    function setReoccurringCountdownTimer() {
        var rDay = document.querySelector('.reoccurring-date-day').value,
            rDate = document.querySelector('.reoccurring-date-date').value,
            rMonth = document.querySelector('.reoccurring-date-month').value,
            rHour = document.querySelector('.reoccurring-date-hour').value,
            rMinutes = document.querySelector('.reoccurring-date-minutes').value,
            rYear = document.querySelector('.reoccurring-date-year').value,
            rNext = document.querySelector('.reoccurring-date-next'),
            rInterval = document.querySelector('.reoccurring-interval').value;

        switch(rDay) {
            case "Monday":
                rDay = 1;
                break;
            case "Tuesday":
                rDay = 2;
                break;
            case "Wednesday":
                rDay = 3;
                break;
            case "Thursday":
                rDay = 4;
                break;
            case "Friday":
                rDay = 5;
                break;
            }
        
        var minDate = luxon.DateTime.utc(parseInt(rYear), parseInt(rMonth), parseInt(rDate), parseInt(rHour), parseInt(rMinutes));
        var reoccurringDate = luxon.DateTime.utc().set({weekday: rDay, hour: rHour, minutes: rMinutes, seconds: 00, milliseconds: 00});

        // TODO: Add in checks for varying intervals. Example: every week vs. every other week event
        if (rInterval == "-2" && minDate.toISO() <= luxon.DateTime.utc().toISO()) {
            //Single event, time elapsed
            replaceElapsed();
        } else if (minDate.toISO() >= luxon.DateTime.utc().toISO()) {
            // Set to min date
            setReoccurringCountdown(minDate.toFormat('yyyy/MM/dd HH:mm:ss') + " UTC");
        } else if (reoccurringDate.toISO() >= luxon.DateTime.utc().toISO()) {
            setReoccurringCountdown(reoccurringDate.toFormat('yyyy/MM/dd HH:mm:ss') + " UTC");
            rNext.innerText = reoccurringDate.toFormat('cccc, dd LLL yyyy');
        } else {
            // Add days to reoccurringDate
            setReoccurringCountdown(reoccurringDate.plus({days: rInterval}).toFormat('yyyy/MM/dd HH:mm:ss') + " UTC");
            rNext.innerText = reoccurringDate.plus({days: rInterval}).toFormat('cccc, dd LLL yyyy');
        }

        function setReoccurringCountdown(countdownToDate) {
            countdownContainer.countdown(countdownToDate, function (event) {
                if (event.elapsed) {
                    // Go back and check for more times
                    setReoccurringCountdownTimer()
                } else {
                    // Show time
                    countdownContainer.html(event.strftime(countdownContainerTime));
                };
            });
        }
    }

    function setCountdownTimer() {
        jQuery.each(countdownDateTime, function (i, val) {

            var upcomingEventTime = jQuery(this).val();
            var eventListingContainer = jQuery(this).parent();
            var eventListingContainerOnDemand = eventListingContainer.find('.btn-on-demand');

            if (getUTCNow(jQuery(this).val()) > getUTCNow(new Date())) {
                countdownContainer.each(function () {
                    jQuery(this).countdown(upcomingEventTime, function (event) {
                        if (event.elapsed) {
                            // Go back and check for more times
                            setCountdownTimer();
                        } else {
                            // Show time
                            jQuery(this).html(event.strftime(countdownContainerTime));
                        };
                    })
                });

                return false;
            } else {
                // Individual event complete
                eventListingContainer.find('.calendar-date').css('opacity', '.5');
                eventListingContainer.find('.btn:not(".btn-on-demand"):not(".btn-replay")').addClass('disabled');
                if (eventListingContainerOnDemand.length > 0) {
                    eventListingContainerOnDemand.html(eventListingContainerOnDemand.html().replace(eventListingContainerOnDemand.html(), ellapsedButtonText))
                }
                // If all times are past (event over)
                if (i == countdownDateTime.length - 1) {
                    jQuery('#countdown-header.countdown-multi-event section').removeClass('pb-5').addClass('pb-3 pb-lg-5');
                    jQuery('#countdown-header.countdown-single-event section').removeClass('pb-5').addClass('pb-0');
                    replaceElapsed();
                }
            }
        });
    }

    function replaceElapsed() {
        jQuery('.countdown-details').add(countdownContainer).add(jQuery('.countdown-date')).add(jQuery('.btn-not-on-demand')).remove();
        jQuery('a, h3').each(function () {
            jQuery(this).html(jQuery(this).html()
                .replace('Reserve My Spot Now', ellapsedButtonText)
                .replace('Register Now', ellapsedButtonText)
                .replace('Register', ellapsedButtonText)
                .replace('Join Us Live On', 'Watch The Replays On')
                .replace('Click Here to Register', ellapsedButtonText));
        });
    }

    function getUTCNow(c) {
        var now = new Date(c);
        var time = now.getTime();
        var offset = now.getTimezoneOffset();
        offset = offset * 60000;
        return time - offset;
    }

    // Uncomment below to pause timer to allow for styling
    //jQuery('.countdown-container').countdown('pause');
})();