(function() {
    var scrollStickyTable = document.querySelector('.table-sticky'),
        scrollStickyTableHeader = document.querySelector(".table-sticky-header");

    if (scrollStickyTable) {
        scrollStickyTable.addEventListener('scroll', function(e) {
            syncScroll(scrollStickyTableHeader, scrollStickyTable);
        });

        scrollStickyTableHeader.addEventListener('scroll', function(e) {
            syncScroll(scrollStickyTable, scrollStickyTableHeader);
        });

        function syncScroll(el1, el2) {
            el1.scrollLeft = el2.scrollLeft;
        }
    }
})();