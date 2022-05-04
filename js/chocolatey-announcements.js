(function() {
    // Show/Hide right side announcement bar notification badge
    var announcementCookie = document.getElementById('announcementCookie').value,
        announcementCount = document.getElementById('announcementCount'),
        announcementBadges = document.querySelectorAll('.notification-badge-announcements'),
        announcementBtns = document.querySelectorAll('.btn-announcement-notifications');

    if (announcementCount) {
        if (!getCookie(announcementCookie)) {
            for (var i of announcementBadges) {
                i.innerText = announcementCount.value;
                i.classList.remove('d-none');
            }
        }
    
        announcementBtns.forEach(function (el) {
            el.addEventListener('click', function () {
                if (!getCookie(announcementCookie)) {
                    if (~location.hostname.indexOf('chocolatey.org')) {
                        document.cookie = announcementCookie + '=true; ' + setCookieExpirationNever() + 'path=/; domain=chocolatey.org;';
                    } else {
                        document.cookie = announcementCookie + '=true;' + setCookieExpirationNever() + 'path=/;';
                    }
                    
                    for (var i of announcementBadges) {
                        i.classList.add('d-none');
                    }
                }
            }, false);
        });
    }
})();