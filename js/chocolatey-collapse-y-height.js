(function() {
    const collapseY =  jQuery('.collapse-y-height'),
          mainContent = jQuery('#mainContent');
    
    if (collapseY.length && mainContent.length) {

        getCollapseYHeight();

        // create an Observer instance
        const resizeObserver = new ResizeObserver(entries => getCollapseYHeight());
        resizeObserver.observe(document.body);
        window.onresize = getCollapseYHeight;

        function getCollapseYHeight() {
            var mainContentOffset = mainContent.offset();

            if (window.innerWidth >= 768) {
                if (mainContentOffset.top + mainContent.outerHeight(true) <  jQuery(window).height()) {
                    collapseYHeight = jQuery(window).height() - jQuery('header').outerHeight(true) - jQuery('footer').outerHeight(true) + 'px';

                    collapseY.css('height', collapseYHeight);
                } else {
                    collapseY.css('height', '');
                }
            }
            else {
                collapseY.css('height', '');
            }
        }
    }
})();