import { choco } from './defaults';

export const isReadOnlyFields = () => {
    const formReadonlyEnabled = document.querySelector('form.readonly-enabled');
    const formInputs = formReadonlyEnabled.querySelectorAll('.form-control:not(#Input_LicenseExpirationDateUtc)');
    const formSelects = formReadonlyEnabled.querySelectorAll('.form-select:not(.always-locked)');
    const formCheckboxes = formReadonlyEnabled.querySelectorAll('.form-check-input:not(.always-locked)');

    if (choco.btnUnlockFields.classList.contains('active')) {
        // Is Locked
        choco.btnUnlockFields.innerHTML = '<i class="fa-solid fa-lock-open text-warning h4"></i>';
        choco.btnUnlockFields.classList.remove('active');

        for (const formInput of formInputs) {
            formInput.readOnly = false;
        }
        for (const formSelect of formSelects) {
            formSelect.disabled = false;
        }
        for (const formCheckbox of formCheckboxes) {
            formCheckbox.disabled = false;
        }
    } else {
        // Is Unlocked
        choco.btnUnlockFields.innerHTML = '<i class="fa-solid fa-lock text-warning h4"></i>';
        choco.btnUnlockFields.classList.add('active');

        for (const formInput of formInputs) {
            if (!formInput.classList.contains('never-locked')) {
                formInput.readOnly = true;
            }
        }
        for (const formSelect of formSelects) {
            if (!formSelect.classList.contains('never-locked')) {
                formSelect.disabled = true;
            }
        }
        for (const formCheckbox of formCheckboxes) {
            if (!formCheckbox.classList.contains('never-locked')) {
                formCheckbox.disabled = true;
            }
        }
    }
};
