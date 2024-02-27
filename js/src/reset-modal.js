(() => {
    // On modal close, set back to defaults
    const allModals = document.querySelectorAll('.modal');

    allModals.forEach(el => {
        el.addEventListener('hidden.bs.modal', () => {
            const modalId = el.querySelector('.modal-id');

            if (modalId) {
                modalId.value = '';
            }

            // Deactivate modal
            if (el.id == 'modalDeactivateLicense') {
                const reasonTrial = document.querySelector('.deactivate-reason-trial');
                const reasonFull = document.querySelector('.deactivate-reason-license');
                const deactivateReasonBtn = document.querySelectorAll('.deactivate-reason.btn-check');
                const deactivateReasonCustom = document.querySelector('.deactivate-reason.form-control');
                const btnDeactivateLicenseConfirm = document.querySelector('.btn-deactivate-license-confirm');

                reasonTrial.classList.add('d-none');
                reasonFull.classList.add('d-none');

                deactivateReasonBtn.forEach(el => {
                    el.checked = false;
                    el.disabled = false;
                });

                deactivateReasonCustom.value = '';
                btnDeactivateLicenseConfirm.disabled = true;
            }
        });
    });
})();
