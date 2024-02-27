import { Modal } from 'bootstrap';

(() => {
    // Trigger status message modal if present, destroy on hide
    const statusMessage = document.getElementById('modalStatusMessage');

    if (statusMessage) {
        const statusMessageModal = Modal.getOrCreateInstance(statusMessage, { keyboard: false, backdrop: 'static' });

        statusMessageModal.show();

        statusMessage.addEventListener('hidden.bs.modal', () => {
            statusMessageModal.dispose();
        });
    }
})();
