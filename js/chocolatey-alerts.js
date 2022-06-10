(function() {
    const topNoticeAlert = document.getElementById('topNoticeAlert'),
          topNotice = window.sessionStorage.getItem('notice'),
          cookieNoticeAlert = document.getElementById('cookieNoticeAlert'),
          cookieNoticeName = 'chocolatey_hide_cookies_notice',
          cookieNotice = getCookie(cookieNoticeName);

    // Top notice alert
    if (topNoticeAlert) {
        if (topNotice) {
            topNoticeAlert.remove();
        } else {
            topNoticeAlert.classList.remove('d-none');
        }

        topNoticeAlert.querySelector('button').addEventListener('click', function() {
            sessionStorage.setItem('notice', 'true');
        }, false);

    }

    // Bottom cookie notice
    if (cookieNoticeAlert) {
        if (cookieNotice) {
            cookieNoticeAlert.remove();
        } else {
            cookieNoticeAlert.classList.remove('d-none');
        }
    
        cookieNoticeAlert.querySelectorAll('button').forEach(function (el) {
            el.addEventListener('click', function() {
                if (~location.hostname.indexOf('chocolatey.org')) {
                    document.cookie = cookieNoticeName + '=true; ' + setCookieExpirationNever() + 'path=/; domain=chocolatey.org;';
                } else {
                    document.cookie = cookieNoticeName + '=true;' + setCookieExpirationNever() + 'path=/;';
                }
            }, false);
        });
    }
})();