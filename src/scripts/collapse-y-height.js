import { outerHeightTrue } from '@choco-core/util/outer-height-true';

(() => {
    const collapseY = document.querySelector('.collapse-y-height');
    const mainContent = document.getElementById('mainContent');

    // Replaces jQuery .offset().top https://stackoverflow.com/a/28222246/10430540
    const getOffset = el => {
        const rect = el.getBoundingClientRect();

        return {
            left: rect.left + window.scrollX,
            top: rect.top + window.scrollY
        };
    };

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
