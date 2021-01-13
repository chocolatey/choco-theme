(function() {
    // Prevent carousels from autoplaying on mobile that have a fixed height on desktop
    var carouselH = document.querySelectorAll('.carousel-h');

    if (carouselH) {
        var mediaSm = window.matchMedia('(max-width: 576px)');

        autoplayCarousels(mediaSm);
        mediaSm.addListener(autoplayCarousels);

        function autoplayCarousels(mediaSm) {
            carouselH.forEach(function (el) {
                var carouselHCarousel = Carousel.getInstance(el) ? Carousel.getInstance(el) : new Carousel(el, { interval: 20000 });

                if (mediaSm.matches) {
                    carouselHCarousel.pause();
                } else {
                    carouselHCarousel.cycle();
                }
            });
        }
    }
})();