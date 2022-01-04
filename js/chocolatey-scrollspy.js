(function() {
    //Highlight/ find active right sidebar nav links when scrolling/clicked
    jQuery.each(jQuery('.nav-scrollspy .nav-link'), function() {
        var scrollHash = jQuery(this).attr('href');

        // Find active link on load
        findActiveRightNavLink(scrollHash);

        // Highlight active links when scrolled
        jQuery(window).scroll(function() {
            findActiveRightNavLink(scrollHash);
        });

        // TODO: Add active class and continue scrolling behavior if link is clicked but no more scroll can occur

        function findActiveRightNavLink(scrollHash) {
            // Enable selecting ID's with "." in them
            if (~scrollHash.indexOf('.')) {
                scrollHash = scrollHash.replace(/\./g, "\\.");
            }

            if (jQuery(scrollHash).length) {
                if (jQuery(window).scrollTop() > jQuery(scrollHash).offset().top - 30 && jQuery(scrollHash).is(':visible')) {
                    jQuery('a[href="' + scrollHash + '"]').addClass('active active-page');
                    jQuery('a[href="' + scrollHash + '"]').parent().prev().find('a.active').removeClass('active active-page');
                } else {
                    jQuery('a[href="' + scrollHash + '"]').removeClass('active active-page');
                }
            }
        }
    });
})();