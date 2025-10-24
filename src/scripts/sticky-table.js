(() => {
    const scrollStickyTable = document.querySelector('.table-sticky');
    const scrollStickyTableHeader = document.querySelector('.table-sticky-header');

    const syncScroll = (el1, el2) => {
        el1.scrollLeft = el2.scrollLeft;
    };

    if (scrollStickyTable) {
        scrollStickyTable.addEventListener('scroll', () => syncScroll(scrollStickyTableHeader, scrollStickyTable));

        scrollStickyTableHeader.addEventListener('scroll', () => syncScroll(scrollStickyTable, scrollStickyTableHeader));
    }
})();
