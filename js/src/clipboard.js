import ClipboardJS from 'clipboard';

(() => {
    const clipboard = new ClipboardJS('.btn-copy');
    const userSelectAllInput = document.querySelectorAll('.user-select-all');

    clipboard.on('success', e => {
        const button = new bootstrap.Button(e.trigger);

        setTimeout(() => { button.toggle(); }, 2000);
        e.clearSelection();
    });

    // Make input text selectable with one click
    if (userSelectAllInput) {
        userSelectAllInput.forEach(el => el.addEventListener('click', () => el.select(), false));
    }
})();
