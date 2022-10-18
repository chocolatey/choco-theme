(() => {
    const btnShowHide = document.querySelectorAll('.btn-show-hide');

    if (btnShowHide) {
        btnShowHide.forEach(el => {
            el.addEventListener('click', () => {
                if (el.textContent.includes('Show')) {
                    el.textContent = el.textContent.replace('Show', 'Hide');
                } else if (el.textContent.includes('Hide')) {
                    el.textContent = el.textContent.replace('Hide', 'Show');
                }
            });
        });
    }
})();
