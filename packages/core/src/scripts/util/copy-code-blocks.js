export const copyCodeBlocks = () => {
    document.querySelectorAll('.copy-command').forEach(el => {
        const copyCommand = el.querySelector('code').getAttribute('class').split(' ');
        const copyBtn = el.querySelector('button');

        if (copyBtn) {
            copyBtn.classList.add('btn-copy');
            copyBtn.setAttribute('data-clipboard-target', `.${copyCommand[0]}`);
        }
    });
};
