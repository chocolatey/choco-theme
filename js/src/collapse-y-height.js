import { getOffset, outerHeightTrue } from './util/functions';

(() => {
    const collapseY = document.querySelector('.collapse-y-height');
    const mainContent = document.getElementById('mainContent');

    if (collapseY && mainContent) {
        const getCollapseYHeight = () => {
            if (window.innerWidth >= 768) {
                if (getOffset(mainContent).top + outerHeightTrue(mainContent) < window.innerHeight) {
                    const collapseYHeight = window.innerHeight - outerHeightTrue(document.querySelector('header')) - outerHeightTrue(document.querySelector('footer'));

                    collapseY.style.height = `${collapseYHeight}px`;
                } else {
                    collapseY.style.height = '';
                }
            } else {
                collapseY.style.height = '';
            }
        };

        getCollapseYHeight();

        // create an Observer instance
        const resizeObserver = new ResizeObserver(() => getCollapseYHeight());

        resizeObserver.observe(document.body);
        window.onresize = getCollapseYHeight;
    }
})();
