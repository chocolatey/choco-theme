(function() {
    const collapseY =  document.querySelector('.collapse-y-height'),
          mainContent = document.getElementById('mainContent');
    
    if (collapseY && mainContent) {

        getCollapseYHeight();

        // create an Observer instance
        const resizeObserver = new ResizeObserver(entries => getCollapseYHeight());
        resizeObserver.observe(document.body);
        window.onresize = getCollapseYHeight;

        function getCollapseYHeight() {
            if (window.innerWidth >= 768) {
                if (getOffset(mainContent).top + outerHeightTrue(mainContent) <  window.innerHeight) {
                    collapseYHeight = window.innerHeight - outerHeightTrue(document.querySelector('header')) - outerHeightTrue(document.querySelector('footer'));

                    collapseY.style.height = collapseYHeight + 'px';
                } else {
                    collapseY.style.height = '';
                }
            }
            else {
                collapseY.style.height = '';
            }
        }
    }
})();