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
    
        var lazyloadItems;    

        if ("IntersectionObserver" in window) {
            lazyloadItems = document.querySelectorAll(".lazy:not(video)");

            var itemObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        var item = entry.target;
                        item.src = item.dataset.src;
                        item.classList.remove("lazy");
                        itemObserver.unobserve(item);
                    }
                });
            });

            lazyloadItems.forEach(function(item) {
                itemObserver.observe(item);
            });
        } else {  
            var lazyloadThrottleTimeout;
            lazyloadItems = document.querySelectorAll(".lazy");
            
            function lazyloadItems () {
                if (lazyloadThrottleTimeout) {
                    clearTimeout(lazyloadThrottleTimeout);
                }    

                lazyloadThrottleTimeout = setTimeout(function() {
                    var scrollTop = window.pageYOffset;

                    lazyloadItems.forEach(function(ite) {
                        if (ite.offsetTop < (window.innerHeight + scrollTop)) {
                            ite.src = ite.dataset.src;
                            ite.classList.remove('lazy');
                        }
                    });
                    if (lazyloadItems.length == 0) { 
                        document.removeEventListener("scroll", lazyloadItems);
                        window.removeEventListener("resize", lazyloadItems);
                        window.removeEventListener("orientationChange", lazyloadItems);
                    }
                }, 20);
            }

            document.addEventListener("scroll", lazyloadItems);
            window.addEventListener("resize", lazyloadItems);
            window.addEventListener("orientationChange", lazyloadItems);
        }

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