export const regenerateModal = () => {
    const btnGenerate = document.querySelectorAll('.btn-generate');
    const modalGenerateInstance = document.getElementById('modalGenerate');

    if (!modalGenerateInstance) {
        return;
    }

    // Bootstrap is included globally
    const modalGenerate = window.bootstrap.Modal.getOrCreateInstance(modalGenerateInstance, { keyboard: false, backdrop: 'static' });

    btnGenerate?.forEach(btn => {
        btn.addEventListener('click', () => {
            modalGenerate.show();
        });
    });
};
