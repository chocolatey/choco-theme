(function() {
    // Show/Hide right side announcement bar notification badge
    var announcementCookie = $('#announcementCookie').val();
    var announcementCount = $('#announcementCount').val();

    if (!getCookie(announcementCookie)) {
        $(".notification-badge").text(announcementCount).removeClass('d-none');
    }

    $(".btn-announcement-notifications").click(function () {
        if (!getCookie(announcementCookie)) {
            document.cookie = announcementCookie + '=true;' + setCookieExpirationNever() + 'path=/;';

            $(".notification-badge").addClass('d-none');
        }
    });
})();