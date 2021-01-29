(function() {
    var formIsInvalidInput = document.querySelectorAll('.input-validation-error'),
        formIsInvalidFeedback = document.querySelectorAll('.field-validation-error');

        if (formIsInvalidInput) {
            formIsInvalidInput.forEach(function (el) {
                el.classList.add('is-invalid');
            });
        }

        if (formIsInvalidFeedback) {
            formIsInvalidFeedback.forEach(function (el) {
                el.classList.add('invalid-feedback');
            });
        }
})();