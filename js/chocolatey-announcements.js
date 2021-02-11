(function() {
    // Show/Hide right side announcement bar notification badge
    var announcementCookie = jQuery('#announcementCookie').val();
    var announcementCount = jQuery('#announcementCount').val();

    if (!getCookie(announcementCookie)) {
        jQuery(".notification-badge").text(announcementCount).removeClass('d-none');
    }

    jQuery(".btn-announcement-notifications").click(function () {
        if (!getCookie(announcementCookie)) {
            document.cookie = announcementCookie + '=true;' + setCookieExpirationNever() + 'path=/;';

            jQuery(".notification-badge").addClass('d-none');
        }
    });
})();