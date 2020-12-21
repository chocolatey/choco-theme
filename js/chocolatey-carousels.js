(function() {
    // Prevent carousels from autoplaying on mobile that have a fixed height on desktop
    var mediaSm = window.matchMedia('(max-width: 576px)');

    autoplayCarousels(mediaSm);
    mediaSm.addListener(autoplayCarousels)

    function autoplayCarousels(mediaSm) {
        if (mediaSm.matches) {
            $('.carousel-h').carousel('pause');
        } else {
            $('.carousel-h').carousel('cycle');
        }
    }
})();