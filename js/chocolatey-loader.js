(function() {
    $('.authentication-error').remove();
    // Manually remove loader so it's not still playing animation in the background
    $('#loader').fadeOut(500, function () {
        $(this).remove();
    });
})();