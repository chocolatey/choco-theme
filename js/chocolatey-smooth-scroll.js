(function() {
    // Smooth scroll
    jQuery('a')
        // Remove links we don't want to smooth scroll to
        .not('[data-bs-toggle="collapse"]')
        .not('[data-bs-toggle="tab"]')
        .not('[data-bs-toggle="pill"]')
        .not('[data-bs-slide="prev"]')
        .not('[data-bs-slide="next"]')
        .not('[href*="/"]')
        .click(function(e) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            e.preventDefault();

            // Store hash
            var hash = this.hash,
                scrollHash = this.hash;

            // Enable selecting ID's with "." in them
            if (~scrollHash.indexOf('.')) {
                scrollHash = hash.replace(/\./g, "\\.");
            }

            if (jQuery(scrollHash).is(':hidden')) {
                var scrollHashParent = jQuery(scrollHash).parent();
                var scrollHashParentCollapse = Collapse.getInstance(scrollHashParent) ? Collapse.getInstance(scrollHashParent) : new Collapse(scrollHashParent, { toggle: false });
                
                // not working
                scrollHashParentCollapse.show();

                jQuery(scrollHash).parent().on('shown.bs.collapse', function () {
                    console.log('smooth scroll collapse shown');
                    animateScroll();
                })
            } else {
                animateScroll();
            }

            function animateScroll() {
                jQuery('html, body').animate({
                    scrollTop: jQuery(scrollHash).offset().top
                    }, 800, function() {
                    window.location.hash = hash;
                });
            }
        }
    });
})();