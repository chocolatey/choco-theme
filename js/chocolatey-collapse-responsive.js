(function() {
    var collapseLg =  document.querySelector('.collapse-lg');
        
    if (collapseLg) {
        var mediaLg = window.matchMedia("(max-width: 1199px)"),
            collapseLgCollapse = Collapse.getInstance(collapseLg) ? Collapse.getInstance(collapseLg) : new Collapse(collapseLg, { toggle: false });
            
        togglecollapseLg(mediaLg);
        mediaLg.addListener(togglecollapseLg);
        
        collapseLg.querySelectorAll('a').forEach(function (el) {
            el.addEventListener('click', function () {
                if (mediaLg.matches) {
                    el.classList.add('active-scroll');
                    collapseLgCollapse.hide();
                }
            }, false);
        });
    
        collapseLg.addEventListener('hidden.bs.collapse', function () {
            var el = collapseLg.querySelector('.active-scroll');

            if (el) {
                elScroll = document.querySelector(escapeId(el.getAttribute('href')));

                elScroll.scrollIntoView();
                el.classList.remove('active-scroll');
            }
        });

        function togglecollapseLg(mediaLg) {
            if (mediaLg.matches) {
                collapseLgCollapse.hide();
            } else {
                collapseLgCollapse.show();
            }
        }
    }
})();