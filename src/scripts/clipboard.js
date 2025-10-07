import ClipboardJS from 'clipboard';

(() => {
    const clipboard = new ClipboardJS('.btn-copy');
    const userSelectAllInput = document.querySelectorAll('.user-select-all');

    clipboard.on('success', e => {
        if (e.trigger.classList.contains('copy-to-clipboard-button')) {
            // Button is inside a Prism code block
            e.trigger.textContent = 'Copied!';
            setTimeout(() => {
                e.trigger.blur();
                setTimeout(() => {
                    e.trigger.textContent = 'Copy';
                }, 200); // Wait for the blur to take effect
            }, 2000);
        } else {
            // Button has an icon and a tooltip
            const button = new bootstrap.Button(e.trigger);

            setTimeout(() => {
                button.toggle();
            }, 2000);
        }

        e.clearSelection();
    });

    // Make input text selectable with one click
    if (userSelectAllInput) {
        userSelectAllInput.forEach(el => el.addEventListener('click', () => el.select(), false));
    }
})();
