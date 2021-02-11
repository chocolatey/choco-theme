(function() {
    var countdownDateTime = jQuery('.countdown-date-time'),
        countdownContainer = jQuery('.countdown-container'),
        ellapsedButtonText = 'Watch On-Demand Now',
        countdownContainerTime = '<div><div>%D</div><p>Days</p></div><div><div>%H</div><p>Hours</p></div><div><div>%M</div><p>Minutes</p></div><div><div>%S</div><p>Seconds</p></div>';

    if (countdownDateTime.length) {
        setCountdownTimer();
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
                .replace('Join Us Live On', 'Watch The Replays On'));
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