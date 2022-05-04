(function() {
    // Functions based on viewport
    getElementHeight();
    window.onresize = getElementHeight;

    function getElementHeight() {
        // Get window height
        let vh = window.innerHeight * 0.01;
        document.querySelector('html').setAttribute('style','--vh:' + vh + 'px;');

        // Get main height
        let mh = window.innerHeight - outerHeightTrue(document.querySelector('header')) - outerHeightTrue(document.querySelector('footer'));
        document.querySelector('main').setAttribute('style','--mh:' + mh + 'px;');
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
            definedDate = luxon.DateTime.fromISO(el.getAttribute('data-event-utc')),
            timeIncludeBreakText,
            timeOccurrenceText;

        if (timeIncludeBreak == 'true') {
            timeIncludeBreakText = '<br />';
        } else if (timeOccurrence == "-2" && definedDate <= luxon.DateTime.utc().toISO()) {
            timeIncludeBreakText = ' '
        } else {
            timeIncludeBreakText = 'at ';
        }

        switch (timeOccurrence) {
            case "0":
                timeOccurrenceText = 'Every ' + definedDate.toLocal().toFormat('cccc') + ' ' + timeIncludeBreakText;
                break;
            case "1":
                timeOccurrenceText = 'First ' + definedDate.toLocal().toFormat('cccc') +  ' of Every Month ' + timeIncludeBreakText;
                break;
            case "-1":
                timeOccurrenceText = definedDate.toLocal().toFormat('cccc, dd LLL yyyy') + timeIncludeBreakText;
                break;
            case "-2":
                timeOccurrenceText = definedDate.toLocal().toFormat('cccc, dd LLL yyyy') + ' ' + timeIncludeBreakText;
                break;
            default:
                timeOccurrenceText = '';
        }

        if (timeOccurrence) {
            if (timeOccurrence == "-2" && definedDate <= luxon.DateTime.utc().toISO()) {
                el.innerHTML = 'Webinar Replay from' + timeIncludeBreakText +  definedDate.toLocal().toFormat('cccc, dd LLL yyyy');
            } else {
                el.innerHTML = timeOccurrenceText + definedDate.toLocal().toFormat("h:mm a ZZZZ") + ' / ' + definedDate.toUTC().toFormat("h:mm a ZZZZ");
            }
            return;
        }

        el.innerHTML = definedDate.toLocal().toFormat("cccc, dd LLL yyyy ") + timeIncludeBreakText + definedDate.toLocal().toFormat("h:mm a ZZZZ") + ' / ' + definedDate.toUTC().toFormat("h:mm a ZZZZ");
    });

    window.copyCodeBlocks=function() {
        document.querySelectorAll('.copy-command').forEach(function (el) {
            var copyCommand = el.querySelector('code').getAttribute('class').split(" "),
                copyBtn = el.querySelector('button');

            if (copyBtn) {
                copyBtn.classList.add('btn-copy');
                copyBtn.setAttribute('data-clipboard-target', '.' + copyCommand[0]);
            }
        });
    }

    window.selectDeploymentMethodTab=function() {
        var selectedDeploymentMethod = getCookie('deployment_method') ? document.querySelectorAll('[data-deployment-method="' + getCookie('deployment_method') + '"]') : document.querySelectorAll('[data-deployment-method="individual"]');

        for (i of selectedDeploymentMethod) {
            var selectedMethodTab = Tab.getInstance(i) ? Tab.getInstance(i) : new Tab(i, { toggle: false });
            selectedMethodTab.show();
        }
    }

    // Set deployment method cookie
    var deploymentMethods = document.querySelectorAll('[data-deployment-method]'),
        deploymentMethodHash = window.location.hash.toString().toLowerCase().substring(1),
        deploymentMethodHashArray = [];

    deploymentMethods.forEach(function (el) {
        var deploymentMethod = el.getAttribute('data-deployment-method');

        if (!deploymentMethodHashArray.includes(deploymentMethod)) {
            deploymentMethodHashArray.push(deploymentMethod);
        }

        el.addEventListener('click', function (e) {
            document.cookie = 'deployment_method=' + deploymentMethod + '; path=/';
        }, false);
    });

    if (deploymentMethodHashArray.includes(deploymentMethodHash)) {
        document.cookie = 'deployment_method=' + deploymentMethodHash + '; path=/';
    }
})();

// Replaces jQuery outerHeight(true)
function outerHeightTrue(el) {
    const rect = el.getBoundingClientRect();

    return rect.height;
}

// Replaces jQuery .offset().top https://stackoverflow.com/a/28222246/10430540
function getOffset(el) {
    const rect = el.getBoundingClientRect();

    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}