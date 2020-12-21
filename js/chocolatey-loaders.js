(function() {
    // Manually remove loader so it's not still playing animation in the background
    $('.loader-container').fadeOut(3000, function () {
        $(this).remove();
    });
})();