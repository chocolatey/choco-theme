(function() {
    //Highlight/ find active right sidebar nav links when scrolling/clicked
    $.each($('.nav-scrollspy .nav-link'), function() {
        var scrollHash = $(this).attr('href');

        // Find active link on load
        findActiveRightNavLink(scrollHash);

        // Highlight active links when scrolled
        $(window).scroll(function() {
            findActiveRightNavLink(scrollHash);
        });

        // TODO: Add active class and continue scrolling behavior if link is clicked but no more scroll can occur

        function findActiveRightNavLink(scrollHash) {
            // Enable selecting ID's with "." in them
            if (~scrollHash.indexOf('.')) {
                scrollHash = scrollHash.replace(/\./g, "\\.");
            }

            if ($(scrollHash).length) {
                if ($(window).scrollTop() >= $(scrollHash).offset().top && $(scrollHash).is(':visible')) {
                    $('a[href="' + scrollHash + '"]').addClass('active active-page');
                    $('a[href="' + scrollHash + '"]').parent().prev().find('a.active').removeClass('active active-page');
                } else {
                    $('a[href="' + scrollHash + '"]').removeClass('active active-page');
                }
            }
        }
    });
})();