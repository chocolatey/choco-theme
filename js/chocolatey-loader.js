(function() {
    jQuery('.authentication-error').remove();
    // Manually remove loader so it's not still playing animation in the background
    jQuery('#loader').fadeOut(500, function () {
        jQuery(this).remove();
    });
})();