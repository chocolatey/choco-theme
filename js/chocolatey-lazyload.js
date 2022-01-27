(function() {
    jQuery(function () {
        jQuery(".lazy + noscript").remove();
    });
    document.addEventListener("DOMContentLoaded", function () {
        jQuery.fn.isInViewport = function () {
            var elementTop = jQuery(this).offset().top;
            var elementBottom = elementTop + jQuery(this).outerHeight();
    
            var viewportTop = jQuery(window).scrollTop();
            var viewportBottom = viewportTop + jQuery(window).height();
    
            return elementBottom > viewportTop && elementTop < viewportBottom;
        };
    
        var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
        var active = false;
    
        var lazyLoadImg = function () {
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
                                document.removeEventListener("scroll", lazyLoadImg);
                                window.removeEventListener("resize", lazyLoadImg);
                                window.removeEventListener("orientationchange", lazyLoadImg);
                            }
                        }
                    });
    
                    active = false;
                }, 200);
            }
        };

        var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

        if ("IntersectionObserver" in window) {
            var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(video) {
                    if (video.isIntersecting) {
                        for (var source in video.target.children) {
                            var videoSource = video.target.children[source];

                            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                                videoSource.src = videoSource.dataset.src;
                            }
                        }

                        video.target.load();
                        video.target.classList.remove("lazy");
                        lazyVideoObserver.unobserve(video.target);
                    }
                });
            });

            lazyVideos.forEach(function(lazyVideo) {
                lazyVideoObserver.observe(lazyVideo);
            });
        }
    
        document.addEventListener("scroll", lazyLoadImg);
        window.addEventListener("resize", lazyLoadImg);
        window.addEventListener("orientationchange", lazyLoadImg);
        jQuery('img.lazy').each(function () {
            if (jQuery(this).isInViewport() && jQuery(this).parent().parent().parent().hasClass("carousel-item")) {
                jQuery('.carousel').on('slide.bs.carousel', function () {
                    lazyLoadImg();
                });
            }
            else if (jQuery(this).isInViewport() && !jQuery(this).parent().parent().parent().hasClass("carousel-item")) {
                jQuery(this).attr("src", jQuery(this).attr("data-src"));
            }
        });
    });
})();