(() => {
    const toggleFadeShow = document.querySelectorAll('.toggle-fade-show');
    const toggleFadeShowContainer = document.querySelectorAll('.toggle-fade-show-container');

    toggleFadeShow.forEach(el => {
        el.addEventListener('click', () => {
            for (const i of toggleFadeShowContainer) {
                i.classList.toggle('show');
            }
        });
    });
})();
