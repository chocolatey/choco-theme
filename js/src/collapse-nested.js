import { escapeId, getParents } from './util/functions';

(() => {
    const nestedCollapseLocation = () => {
        if (location.hash) {
            const el = document.querySelector(escapeId(location.hash));

            if (el) {
                const elScroll = el;
                const collapseParents = getParents(el).filter(el => el != document && el.classList.contains('collapse'));

                if (collapseParents.length == 0 && el.classList.contains('collapse')) {
                    collapseParents.push(el);
                }

                collapseParents.reverse().forEach((el, idx, array) => {
                    el = document.getElementById(escapeId(el.id));

                    const collapseParentContainer = bootstrap.Collapse.getOrCreateInstance(el, { toggle: false });

                    collapseParentContainer.show();

                    el.addEventListener('shown.bs.collapse', e => {
                        e.stopImmediatePropagation();

                        if (idx === array.length - 1) {
                            elScroll.scrollIntoView();
                        }
                    });
                });
            }
        }
    };

    const nestedTabLocation = () => {
        if (location.hash) {
            const el = document.querySelector(`[data-bs-toggle="tab"][href="${escapeId(location.hash)}"]`);

            if (el) {
                const elScroll = el;
                const tabParents = getParents(el).filter(el => el != document && el.classList.contains('tab-pane'));

                tabParents.push(el);

                tabParents.reverse().forEach((el, idx, array) => {
                    if (!el.id.includes('-tab')) {
                        el = document.getElementById(`${escapeId(el.id)}-tab`);
                    }

                    const tabParentContainer = bootstrap.Tab.getOrCreateInstance(el, { toggle: false });

                    tabParentContainer.show();

                    el.addEventListener('shown.bs.tab', e => {
                        e.stopImmediatePropagation();

                        if (idx === array.length - 1) {
                            elScroll.scrollIntoView();
                        }
                    });
                });
            }
        }
    };

    nestedCollapseLocation();
    nestedTabLocation();
    window.addEventListener('hashchange', nestedCollapseLocation, false);
    window.addEventListener('hashchange', nestedTabLocation, false);

    const btnCollapseTarget = document.querySelectorAll('.btn-collapse-target');

    if (btnCollapseTarget) {
        btnCollapseTarget.forEach(el => {
            el.addEventListener('click', () => {
                const collapseTarget = document.querySelector(el.getAttribute('data-collapse-target'));
                const collapseTargetContainer = bootstrap.Collapse.getOrCreateInstance(collapseTarget, { toggle: false });

                collapseTargetContainer.show();
            }, false);
        });
    }

    const changeHash = el => {
        el.addEventListener('click', e => {
            history.pushState(null, null, e.target.hash);
        });
    };

    document.querySelectorAll('[data-bs-toggle="tab"]:not(.d-hash-none)').forEach(el => changeHash(el));

    document.querySelectorAll('[data-bs-toggle="collapse"]:not(.d-hash-none)').forEach(el => changeHash(el));
})();
