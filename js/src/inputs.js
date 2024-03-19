(() => {
    const formSelect = document.querySelectorAll('select');

    if (formSelect) {
        formSelect.forEach(el => el.classList.add('form-select'));
    }
})();
