(function() {
    nestedCollapseLocation();
    window.onhashchange = nestedCollapseLocation;

    function nestedCollapseLocation() {
        if (location.hash) {
            var el = document.querySelector(escapeId(location.hash));
            
            if (el) {
                var elScroll = el,
                    collapseParents = getParents(el).filter(el => el != document && el.classList.contains('collapse'));

                collapseParents.reverse().forEach(function (el, idx, array) {
                    el = document.getElementById(escapeId(el.id));

                    var collapseParentContainer = Collapse.getInstance(el) ? Collapse.getInstance(el) : new Collapse(el, { toggle: false });
                    
                    collapseParentContainer.show();

                    el.addEventListener('shown.bs.collapse', function (e) {
                        e.stopImmediatePropagation();

                        if (idx === array.length - 1){
                            elScroll.scrollIntoView();
                        }
                    });
                });
            }
        }
    }

    var btnCollapseTarget = document.querySelectorAll('.btn-collapse-target');
    if (btnCollapseTarget) {
        btnCollapseTarget.forEach(function (el) {
            el.addEventListener('click', function () {
                var collapseTarget = document.querySelector(el.getAttribute('data-collapse-target')),
                    collapseTargetContainer = Collapse.getInstance(collapseTarget) ? Collapse.getInstance(collapseTarget) : new Collapse(collapseTarget, { toggle: false });

                collapseTargetContainer.show();
            });
        });
    }
})();