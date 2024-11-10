export const toastTrigger = (toastMessage, type) => {
    let toastType;
    let toastIcon;
    const toastContainer = document.querySelector('.toast-container');
    const toastNumber = () => Math.floor(100000 + Math.random() * 900000);
    const toastId = `toast${toastNumber()}`;

    switch (type) {
        case 'error':
            toastType = 'text-bg-danger';
            toastIcon = '<i class="fa-solid fa-ban me-1"></i>';
            break;
        case 'warning':
            toastType = 'text-bg-warning';
            toastIcon = '<i class="fa-solid fa-exclamation me-1"></i>';
            break;
        default:
            toastType = 'text-bg-success';
            toastIcon = '<i class="fa-solid fa-circle-check me-1"></i>';
    };

    const toast = `<div id="${toastId}" class="toast align-items-center ${toastType}" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
            <div class="toast-body">
                <p class="mb-0 toast-message"><strong>${toastIcon}</strong>${toastMessage}</p>
            </div>
            <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"><span aria-hidden="true" class="fa-solid fa-xmark"></span></button>
        </div>
    </div>`;

    toastContainer.insertAdjacentHTML('beforeend', toast);

    const toastElement = document.querySelector(`#${toastId}`);
    const toastInstance = bootstrap.Toast.getOrCreateInstance(toastElement, { autohide: true });

    toastInstance.show();

    // Remove toast after it has been hidden
    toastElement.addEventListener('hidden.bs.toast', () => {
        toastElement.remove();
    });
};
