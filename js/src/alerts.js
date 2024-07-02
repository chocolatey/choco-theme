import { setCookieExpirationNever } from './util/set-cookie-expiration-never';
import { getCookie } from './util/get-cookie';

(() => {
    const topNoticeAlert = document.getElementById('topNoticeAlert');
    const topNotice = window.sessionStorage.getItem('notice');
    const cookieNoticeAlert = document.getElementById('cookieNoticeAlert');
    const cookieNoticeName = 'chocolatey_hide_cookies_notice';

    // Top notice alert
    if (topNoticeAlert) {
        if (topNotice) {
            topNoticeAlert.remove();
        } else {
            topNoticeAlert.classList.remove('d-none');
        }

        topNoticeAlert.querySelector('button').addEventListener('click', () => sessionStorage.setItem('notice', 'true'), false);
    }

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
