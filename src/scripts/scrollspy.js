import jQuery from 'jquery';

(() => {
    jQuery('.nav-scrollspy .nav-link').each((index, element) => {
        const scrollHash = jQuery(element).attr('href');

        const findActiveRightNavLink = scrollHash => {
            if (scrollHash === '#') {
                jQuery(element).parent().remove();
                return;
            }

            // Enable selecting ID's with "." in them
            if (~scrollHash.indexOf('.')) {
                scrollHash = scrollHash.replace(/\./g, '\\.');
            }

            if (jQuery(scrollHash).length) {
                if (jQuery(window).scrollTop() > jQuery(scrollHash).offset().top - 30 && jQuery(scrollHash).is(':visible')) {
                    jQuery(`a[href="${scrollHash}"].nav-link`).addClass('active active-page');
                    jQuery(`a[href="${scrollHash}"].nav-link`).parent().prev().find('a.active').removeClass('active active-page');
                } else {
                    jQuery(`a[href="${scrollHash}"].nav-link`).removeClass('active active-page');
                }
            }
        };

        // Find active link on load
        findActiveRightNavLink(scrollHash);

        // Highlight active links when scrolled
        window.addEventListener('scroll', () => {
            findActiveRightNavLink(scrollHash);
        });
    });
})();
