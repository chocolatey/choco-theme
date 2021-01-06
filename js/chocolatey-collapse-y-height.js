(function() {
    const collapseY =  $('.collapse-y-height'),
          mainContent = $('#mainContent');
    
    if (collapseY.length && mainContent.length) {

        getCollapseYHeight();
        window.onresize = getCollapseYHeight;

        function getCollapseYHeight() {
            var mainContentOffset = mainContent.offset();

            if (window.innerWidth >= 768) {
                if (mainContentOffset.top + mainContent.outerHeight(true) <  $(window).height()) {
                    collapseYHeight = $(window).height() - $('header').outerHeight(true) - $('footer').outerHeight(true) + 'px';

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