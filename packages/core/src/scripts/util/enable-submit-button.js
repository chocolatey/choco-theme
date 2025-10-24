export const enableSubmitButton = () => {
    const btnSubmit = document.querySelector('.btn-submit');

    if (btnSubmit.disabled) {
        btnSubmit.disabled = false;
    }
};
