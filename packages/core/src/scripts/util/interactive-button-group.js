export const interactiveButtonGroup = () => {
    const buttonGroups = document.querySelectorAll('.btn-group-interactive');
    if (buttonGroups.length === 0) {
        return;
    }

    buttonGroups.forEach(buttonGroup => {
        const buttons = buttonGroup.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                buttons.forEach(b => {
                    b.classList.remove('active');
                    b.setAttribute('aria-pressed', 'false');
                });

                button.classList.add('active');
                button.setAttribute('aria-pressed', 'true');
            });
        });
    });
};
