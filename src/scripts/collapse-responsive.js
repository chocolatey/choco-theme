import { escapeId } from '@choco-core/util/escape-id';

(() => {
    const collapseLg = document.querySelector('.collapse-lg');

    if (collapseLg) {
        const mediaLg = window.matchMedia('(max-width: 1199px)');
        const collapseLgCollapse = bootstrap.Collapse.getOrCreateInstance(collapseLg, { toggle: false });

        collapseLg.querySelectorAll('a').forEach(el => {
            el.addEventListener('click', () => {
                if (mediaLg.matches) {
                    el.classList.add('active-scroll');
                    collapseLgCollapse.hide();
                }
            }, false);
        });

        collapseLg.addEventListener('hidden.bs.collapse', () => {
            const el = collapseLg.querySelector('.active-scroll');

            if (el) {
                const elScroll = document.querySelector(escapeId(el.getAttribute('href')));

                elScroll.scrollIntoView();
                el.classList.remove('active-scroll');
            }
        });

        const toggleCollapseLg = mediaLg => {
            if (mediaLg.matches) {
                collapseLgCollapse.hide();
            } else {
                collapseLgCollapse.show();
            }
        };

        toggleCollapseLg(mediaLg);
        mediaLg.addEventListener('change', () => toggleCollapseLg(mediaLg));
    }
})();
