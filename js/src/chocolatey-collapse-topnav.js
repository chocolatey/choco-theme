import { Collapse } from 'bootstrap';

(() => {
    document.addEventListener('click', e => {
        const header = document.querySelector('header');
        const isClickInside = header.contains(e.target);

        if (!isClickInside && document.querySelector('.navbar-nested-collapse .collapse.show')) {
            const collapseHeader = document.querySelector('.navbar-nested-collapse .collapse.show');
            const collapseHeaderNav = Collapse.getOrCreateInstance(collapseHeader, { toggle: false });

            collapseHeaderNav.hide();
        }
    });
})();
