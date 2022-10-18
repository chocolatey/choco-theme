(() => {
    document.querySelectorAll('.nav-link-multi-tab').forEach(el => {
        el.addEventListener('show.bs.tab', () => {
            const targetClass = el.dataset.bsTarget;
            const pane = document.querySelector(`#multiTabB ${targetClass}`);
            const sibling = document.querySelector('#multiTabB .tab-pane.active');

            // hide 2nd pane sibling
            sibling.classList.remove('show', 'active');

            // show 2nd pane
            pane.classList.add('show', 'active');
        });
    });
})();
