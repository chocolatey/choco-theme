import { getCookie, setCookieExpirationNever } from './util/chocolatey-functions';

(() => {
    // Show/Hide right side announcement bar notification badge
    const announcementCookie = document.getElementById('announcementCookie').value;
    const announcementCount = document.getElementById('announcementCount');
    const announcementBadges = document.querySelectorAll('.notification-badge-announcements');
    const announcementBtns = document.querySelectorAll('.btn-announcement-notifications');

    if (announcementCount) {
        if (!getCookie(announcementCookie)) {
            for (const i of announcementBadges) {
                i.innerText = announcementCount.value;
                i.classList.remove('d-none');
            }
        }

        announcementBtns.forEach(el => {
            el.addEventListener('click', () => {
                if (!getCookie(announcementCookie)) {
                    if (~location.hostname.indexOf('chocolatey.org')) {
                        document.cookie = `${announcementCookie}=true; ${setCookieExpirationNever()}path=/; domain=chocolatey.org;`;
                    } else {
                        document.cookie = `${announcementCookie}=true; ${setCookieExpirationNever()}path=/;`;
                    }

                    for (const i of announcementBadges) {
                        i.classList.add('d-none');
                    }
                }
            }, false);
        });
    }
})();
