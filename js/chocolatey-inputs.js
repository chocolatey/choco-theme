(function() {
    const formSelect = document.querySelectorAll('select');

    if (formSelect) {
        formSelect.forEach(function (el) {
            el.classList.add('form-select');
        });
    }
})();