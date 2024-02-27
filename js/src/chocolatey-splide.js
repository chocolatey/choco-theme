import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { Intersection } from '@splidejs/splide-extension-intersection';

if (document.querySelector('.splide-trusted-businesses')) {
    const splideTrustedBusinesses = new Splide('.splide-trusted-businesses', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        pagination: false,
        arrows: false,
        lazyLoad: 'nearby',
        perPage: 7,
        autoScroll: {
            speed: 1,
            autoStart: false
        },
        intersection: {
            inView: {
                autoScroll: true
            },
            outView: {
                autoScroll: false
            }
        }
    });

    splideTrustedBusinesses.mount({ AutoScroll, Intersection });
}

if (document.querySelector('.splide-testimonials')) {
    const splideTestimonials = new Splide('.splide-testimonials', {
        type: 'loop',
        perPage: 3,
        focus: 'center',
        updateOnMove: true,
        pagination: false,
        classes: {
            // arrows: 'splide__arrows your-class-arrows',
            arrow: 'splide__arrow btn btn-link'
            // prev: 'splide__arrow--prev your-class-prev',
            // next: 'splide__arrow--next your-class-next'
        },
        breakpoints: {
            992: {
                perPage: 1
            }
        }
    });

    splideTestimonials.mount();
}

if (document.querySelector('.splide-experience-chocolatey')) {
    const splideExperienceChocolatey = new Splide('.splide-experience-chocolatey', {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        pagination: false,
        arrows: false,
        autoWidth: true,
        autoScroll: {
            speed: 1,
            autoStart: false
        },
        intersection: {
            inView: {
                autoScroll: true
            },
            outView: {
                autoScroll: false
            }
        }
    });

    splideExperienceChocolatey.mount({ AutoScroll, Intersection });
}
