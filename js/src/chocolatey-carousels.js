import { Carousel } from 'bootstrap';

(() => {
    // Prevent carousels from autoplaying on mobile that have a fixed height on desktop
    const carouselH = document.querySelectorAll('.carousel-h');

    if (carouselH) {
        const mediaSm = window.matchMedia('(max-width: 576px)');

        const autoplayCarousels = mediaSm => {
            carouselH.forEach(el => {
                const carouselHCarousel = Carousel.getOrCreateInstance(el, { interval: 20000 });

                if (mediaSm.matches) {
                    carouselHCarousel.pause();
                } else {
                    carouselHCarousel.cycle();
                }
            });
        };

        autoplayCarousels(mediaSm);
        mediaSm.addEventListener('change', () => autoplayCarousels(mediaSm));
    }
})();
