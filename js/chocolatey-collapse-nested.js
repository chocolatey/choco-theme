(function() {
    nestedCollapseLocation();
    nestedTabLocation();
    window.onhashchange = nestedCollapseLocation;
    window.onhashchange = nestedTabLocation;

    function nestedCollapseLocation() {
        if (location.hash) {
            var el = document.querySelector(escapeId(location.hash));
            
            if (el) {
                var elScroll = el,
                    collapseParents = getParents(el).filter(el => el != document && el.classList.contains('collapse'));

                if (collapseParents.length == 0 && el.classList.contains('collapse')) {
                    collapseParents.push(el);
                }

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

    function nestedTabLocation() {
        if (location.hash) {
            var el = document.querySelector('[data-bs-toggle="tab"][href="' + escapeId(location.hash) + '"]');
            
            if (el) {               
                var elScroll = el,
                    tabParents = getParents(el).filter(el => el != document && el.classList.contains('tab-pane'));

                tabParents.push(el);

                tabParents.reverse().forEach(function (el, idx, array) {
                    if (!el.id.includes('-tab')) {
                        el = document.getElementById(escapeId(el.id) + '-tab');
                    }

                    var tabParentContainer = Tab.getInstance(el) ? Tab.getInstance(el) : new Tab(el, { toggle: false });
                    
                    tabParentContainer.show();

                    el.addEventListener('shown.bs.tab', function (e) {
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
            }, false);
        });
    }

    document.querySelectorAll('[data-bs-toggle="tab"]:not(.d-hash-none)').forEach(function (el) {
        changeHash(el);
    });

    document.querySelectorAll('[data-bs-toggle="collapse"]:not(.d-hash-none)').forEach(function (el) {
        changeHash(el);
    });

    function changeHash(el) {
        el.addEventListener('click', function (e) {
            if (history.pushState) {
                history.pushState(null, null, e.target.hash);
            } else {
                window.location.hash = e.target.hash; //Polyfill for old browsers
            }
        });
    }
})();