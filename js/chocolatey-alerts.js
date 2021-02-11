(function() {
    const topNoticeAlert = jQuery('#topNoticeAlert'),
          topNotice = window.sessionStorage.getItem('notice'),
          cookieNoticeAlert = jQuery('#cookieNoticeAlert'),
          cookieNoticeName = 'chocolatey_hide_cookies_notice',
          cookieNotice = getCookie(cookieNoticeName);

    // Top notice alert
    if (topNotice) {
        topNoticeAlert.remove();
    } else {
        topNoticeAlert.removeClass('d-none');
    }

    topNoticeAlert.find('button').click(function() {
        sessionStorage.setItem('notice', 'true');
    });

    // Bottom cookie notice
    if (cookieNotice) {
        cookieNoticeAlert.remove();
    } else {
        cookieNoticeAlert.removeClass('d-none');
    }

    cookieNoticeAlert.find('button').click(function() {
        if (~location.hostname.indexOf('chocolatey.org')) {
            document.cookie = cookieNoticeName + '=true; ' + setCookieExpirationNever() + 'path=/; domain=chocolatey.org;';
        } else {
            document.cookie = cookieNoticeName + '=true;' + setCookieExpirationNever() + 'path=/;';
        }
    });
})();