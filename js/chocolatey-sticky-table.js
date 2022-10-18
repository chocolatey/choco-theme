import { syncScroll } from './util/chocolatey-functions';

(() => {
    const scrollStickyTable = document.querySelector('.table-sticky');
    const scrollStickyTableHeader = document.querySelector('.table-sticky-header');

    if (scrollStickyTable) {
        scrollStickyTable.addEventListener('scroll', () => syncScroll(scrollStickyTableHeader, scrollStickyTable));

        scrollStickyTableHeader.addEventListener('scroll', () => syncScroll(scrollStickyTable, scrollStickyTableHeader));
    }
})();
