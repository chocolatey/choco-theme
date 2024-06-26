import { getCookie, setCookieExpirationNever } from './util/functions';

(() => {
    const cookieNoticeAlert = document.getElementById('cookieNoticeAlert');
    const cookieNoticeName = 'chocolatey_hide_cookies_notice';

    // Bottom cookie notice
    if (cookieNoticeAlert) {
        if (getCookie(cookieNoticeName)) {
            cookieNoticeAlert.remove();
        } else {
            cookieNoticeAlert.classList.remove('d-none');
        }

        cookieNoticeAlert.querySelectorAll('button').forEach(el => {
            el.addEventListener('click', () => {
                if (~location.hostname.indexOf('chocolatey.org')) {
                    document.cookie = `${cookieNoticeName}=true; ${setCookieExpirationNever()}path=/; domain=chocolatey.org;`;
                } else {
                    document.cookie = `${cookieNoticeName}=true; ${setCookieExpirationNever()}path=/;`;
                }
            }, false);
        });
    }
})();
