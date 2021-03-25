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
})();