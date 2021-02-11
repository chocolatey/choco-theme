(function() {
    jQuery('.shuffle').each(function () {
        var divs = jQuery(this).children().has('img');
        while (divs.length) {
            jQuery(this).prepend(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
    });
})();