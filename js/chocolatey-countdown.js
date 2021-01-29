(function() {
    var countdownDateTime = $('.countdown-date-time'),
        countdownContainer = $('.countdown-container'),
        ellapsedButtonText = 'Watch On-Demand Now',
        countdownContainerTime = '<div><div>%D</div><p>Days</p></div><div><div>%H</div><p>Hours</p></div><div><div>%M</div><p>Minutes</p></div><div><div>%S</div><p>Seconds</p></div>';

    if (countdownDateTime.length) {
        setCountdownTimer();
    }

    function setCountdownTimer() {
        $.each(countdownDateTime, function (i, val) {

            var upcomingEventTime = $(this).val();
            var eventListingContainer = $(this).parent();
            var eventListingContainerOnDemand = eventListingContainer.find('.btn-on-demand');

            if (getUTCNow($(this).val()) > getUTCNow(new Date())) {
                countdownContainer.each(function () {
                    $(this).countdown(upcomingEventTime, function (event) {
                        if (event.elapsed) {
                            // Go back and check for more times
                            setCountdownTimer();
                        } else {
                            // Show time
                            $(this).html(event.strftime(countdownContainerTime));
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
                    $('#countdown-header.countdown-multi-event section').removeClass('pb-5').addClass('pb-3 pb-lg-5');
                    $('#countdown-header.countdown-single-event section').removeClass('pb-5').addClass('pb-0');
                    replaceElapsed();
                }
            }
        });
    }

    function replaceElapsed() {
        $('.countdown-details').add(countdownContainer).add($('.countdown-date')).add($('.btn-not-on-demand')).remove();
        $('a, h3').each(function () {
            $(this).html($(this).html()
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
    //$('.countdown-container').countdown('pause');
})();