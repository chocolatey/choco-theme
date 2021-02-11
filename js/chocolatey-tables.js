(function() {
    const table = jQuery('table');

    // Style Tables
    jQuery.each(table, function () {
        jQuery(this).wrap('<div class="table-responsive"></div>');
        jQuery(this).addClass('table table-bordered table-striped');
    });
})();