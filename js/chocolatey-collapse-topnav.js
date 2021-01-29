(function() {
    document.addEventListener('click', function (e) {
        var header = document.querySelector('header'),
            isClickInside = header.contains(e.target);

        if (!isClickInside && document.querySelector('.navbar-nested-collapse .collapse.show')) {
            var collapseHeader = document.querySelector('.navbar-nested-collapse .collapse.show'),
                collapseHeaderNav = Collapse.getInstance(collapseHeader) ? Collapse.getInstance(collapseHeader) : new Collapse(collapseHeader, { toggle: false });

            collapseHeaderNav.hide();
        }
    });
})();