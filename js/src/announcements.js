import { setCookieExpirationNever } from './util/set-cookie-expiration-never';
import { getCookie } from './util/get-cookie';

(() => {
    // Show/Hide right side announcement bar notification badge
    const announcementCookie = document.getElementById('announcementCookie');
    const announcementCount = document.getElementById('announcementCount');
    const announcementBadges = document.querySelectorAll('.notification-badge-announcements');
    const announcementBtns = document.querySelectorAll('.btn-announcement-notifications');

    if (announcementCount && announcementCookie) {
        if (!getCookie(announcementCookie.value)) {
            for (const i of announcementBadges) {
                i.innerText = announcementCount.value;
                i.classList.remove('d-none');
            }
        }

        announcementBtns.forEach(el => {
            el.addEventListener('click', () => {
                if (!getCookie(announcementCookie.value)) {
                    if (~location.hostname.indexOf('chocolatey.org')) {
                        document.cookie = `${announcementCookie.value}=true; ${setCookieExpirationNever()}path=/; domain=chocolatey.org;`;
                    } else {
                        document.cookie = `${announcementCookie.value}=true; ${setCookieExpirationNever()}path=/;`;
                    }

                    for (const i of announcementBadges) {
                        i.classList.add('d-none');
                    }
                }
            }, false);
        });
    }
})();
