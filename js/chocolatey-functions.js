(function() {
    // Functions based on viewport
    getElementHeight();
    window.onresize = getElementHeight;

    function getElementHeight() {
        // Get window height
        let vh = window.innerHeight * 0.01;
        jQuery('html').css('--vh', vh + 'px');

        // Get main height
        let mh = window.innerHeight - jQuery('header').outerHeight(true) - jQuery('footer').outerHeight(true);
        jQuery('main').css('--mh', mh + 'px');
    }

    // Set a cookie value that never expires based on current date
    window.setCookieExpirationNever=function() {
        var d = new Date();
        // 100 years in milliseconds: 100 years * 365 days * 24 hours * 60 minutes * 60 seconds * 1000ms
        d.setTime(d.getTime() + (100 * 365 * 24 * 60 * 60 * 1000));
        return 'expires=' + d.toUTCString() + ';';
    }

    // Get cookies
    window.getCookie=function(name) {
        var pattern = RegExp(name + "=.[^;]*"),
            matched = document.cookie.match(pattern);

        if (matched) {
            var cookie = matched[0].split('=');
            return cookie[1];
        }
        return false;
    }

    // Get parents of an element and push to array
    window.getParents=function(el) {
        var parents = [],
            node = el;

        while (node != document) {
            parents.push(node.parentNode);
            node = node.parentNode;
        }
        return parents;
    }

    // Escape special chars from Id elements
    window.escapeId=function(el) {
        return el.replace(/[.]/g, "\\$&");
    }

    // Trims off spaces from the beginning and end of a string and replaces it
    window.trimString=function(item) {
        return item.innerHTML = item.innerHTML.trim();
    }

    // Convert event time to local/utc
    var convertEventTimeToLocal = document.querySelectorAll('.convert-utc-to-local');
    convertEventTimeToLocal.forEach(function (el) {
        var timeIncludeBreak = el.getAttribute('data-event-include-break'),
            timeOccurrence = el.getAttribute('data-event-occurrence'),
            utcTime = el.getAttribute('data-event-utc').split(' '),
            datePart = utcTime[0].split('/'),
            timePart = utcTime[1].split(':'),
            utcDateTime = luxon.DateTime.utc(parseInt(datePart[2]), parseInt(datePart[0]), parseInt(datePart[1]), parseInt(timePart[0]), parseInt(timePart[1]), parseInt(timePart[2])),
            timeIncludeBreakText,
            timeOccurrenceText;

        if (timeIncludeBreak == 'true') {
            timeIncludeBreakText = '<br />';
        } else if (timeOccurrence == "-2" && utcDateTime.toISO() <= luxon.DateTime.utc().toISO()) {
            timeIncludeBreakText = ' '
        } else {
            timeIncludeBreakText = 'at ';
        }

        switch (timeOccurrence) {
            case "0":
                timeOccurrenceText = 'Every ' + utcDateTime.toLocal().toFormat('cccc') + ' ' + timeIncludeBreakText;
                break;
            case "1":
                timeOccurrenceText = 'First ' + utcDateTime.toLocal().toFormat('cccc') +  ' of Every Month ' + timeIncludeBreakText;
                break;
            case "-1":
                timeOccurrenceText = utcDateTime.toLocal().toFormat('cccc, dd LLL yyyy') + timeIncludeBreakText;
                break;
            case "-2":
                timeOccurrenceText = utcDateTime.toLocal().toFormat('cccc, dd LLL yyyy') + ' ' + timeIncludeBreakText;
                break;
            default:
                timeOccurrenceText = '';
        }

        if (timeOccurrence) {
            if (timeOccurrence == "-2" && utcDateTime.toISO() <= luxon.DateTime.utc().toISO()) {
                el.innerHTML = 'Webinar Replay from' + timeIncludeBreakText +  utcDateTime.toLocal().toFormat('cccc, dd LLL yyyy');
            } else {
                el.innerHTML = timeOccurrenceText + utcDateTime.toLocal().toFormat("h:mm a ZZZZ") + ' / ' + utcDateTime.toFormat("h:mm a 'GMT'");
            }
            return;
        }

        el.innerHTML = utcDateTime.toLocal().toFormat("cccc, dd LLL yyyy ") + timeIncludeBreakText + utcDateTime.toLocal().toFormat("h:mm a ZZZZ") + ' / ' + utcDateTime.toFormat("h:mm a 'GMT'");
    });
})();