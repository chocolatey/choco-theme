(function() {
    $(function () {
        $(".lazy + noscript").remove();
    });
    document.addEventListener("DOMContentLoaded", function () {
        $.fn.isInViewport = function () {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
    
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
    
            return elementBottom > viewportTop && elementTop < viewportBottom;
        };
    
        var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
        var active = false;
    
        var lazyLoad = function () {
            if (active === false) {
                active = true;
    
                setTimeout(function () {
                    lazyImages.forEach(function (lazyImage) {
                        if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                            lazyImage.src = lazyImage.dataset.src;
                            lazyImage.classList.remove("lazy");
    
                            lazyImages = lazyImages.filter(function (image) {
                                return image !== lazyImage;
                            });
    
                            if (lazyImages.length === 0) {
                                document.removeEventListener("scroll", lazyLoad);
                                window.removeEventListener("resize", lazyLoad);
                                window.removeEventListener("orientationchange", lazyLoad);
                            }
                        }
                    });
    
                    active = false;
                }, 200);
            }
        };
    
        document.addEventListener("scroll", lazyLoad);
        window.addEventListener("resize", lazyLoad);
        window.addEventListener("orientationchange", lazyLoad);
        $('.lazy').each(function () {
            if ($(this).isInViewport() && $(this).parent().parent().parent().hasClass("carousel-item")) {
                $('.carousel').on('slide.bs.carousel', function () {
                    lazyLoad();
                });
            }
            else if ($(this).isInViewport() && !$(this).parent().parent().parent().hasClass("carousel-item")) {
                $(this).attr("src", $(this).attr("data-src"));
            }
        });
    });
})();