import { choco } from './defaults';
import { isReadOnlyFields } from './is-read-only-fields';

export const disableSubmitButton = formName => {
    const btnSubmit = document.querySelector('.btn-submit');

    formName.addEventListener('submit', () => {
        if (choco.btnUnlockFields) {
            if (choco.btnUnlockFields.classList.contains('active')) {
                isReadOnlyFields();
            }
        }

        // Disable the submit button so users can't accidentally submit multiple requests
        btnSubmit.disabled = true;
    });
};
