import { enableSubmitButton } from './enable-submit-button';

export const enableSubmitButtonOnKeyup = () => {
    const allInputs = document.querySelectorAll('.form-control');

    for (const i of allInputs) {
        i.addEventListener('keyup', () => {
            // Enable the submit button again after users have interacted with the form again
            enableSubmitButton();
        });
    }
};
