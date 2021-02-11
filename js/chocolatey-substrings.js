(function() {
    jQuery.each(jQuery('[data-substring]'), function (i,val) {
        var subStringLength =  parseInt(jQuery(this).attr('data-substring') - 1);

        if (jQuery(this).text().length > subStringLength) {
            var subString =  jQuery.trim(jQuery(this).text().substring(0,subStringLength));
            var subStringLink = jQuery(this).attr('data-link');

            // If a 'data-link' is supplied link the "..."
            if (typeof subStringLink !== typeof undefined && subStringLink !== false) {
                return jQuery(this).html(subString + '<a href="' + subStringLink +'"><strong>...</strong></a>');
            }

        return jQuery(this).html(subString + '...');
        }
    });
})();