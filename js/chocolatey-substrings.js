$.each($('[data-substring]'), function (i,val) {
    var subStringLength =  parseInt($(this).attr('data-substring') - 1);

    if ($(this).text().length > subStringLength) {
        var subString =  $.trim($(this).text().substring(0,subStringLength));
        var subStringLink = $(this).attr('data-link');

        // If a 'data-link' is supplied link the "..."
        if (typeof subStringLink !== typeof undefined && subStringLink !== false) {
            return $(this).html(subString + '<a href="' + subStringLink +'"><strong>...</strong></a>');
        }

       return $(this).html(subString + '...');
    }
});