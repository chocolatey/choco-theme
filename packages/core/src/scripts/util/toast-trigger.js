export const toastTrigger = (toastMessage, type) => {
    let toastType;
    let toastIcon;
    const toastContainer = document.querySelector('.toast-container');
    const toastId = `toast${Math.floor(100000 + Math.random() * 900000)}`;

    switch (type) {
        case 'error':
            toastType = 'text-bg-danger';
            toastIcon = 'fa-solid fa-ban';
            break;
        case 'warning':
            toastType = 'text-bg-warning';
            toastIcon = 'fa-solid fa-exclamation';
            break;
        default:
            toastType = 'text-bg-success';
            toastIcon = 'fa-solid fa-circle-check';
    };

    const toast = document.createElement('div');
    toast.id = toastId;
    toast.className = `toast align-items-center ${toastType}`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');

    const flex = document.createElement('div');
    flex.className = 'd-flex';

    const body = document.createElement('div');
    body.className = 'toast-body';

    const message = document.createElement('p');
    message.className = 'mb-0 toast-message';

    const strong = document.createElement('strong');

    const icon = document.createElement('i');
    icon.className = `${toastIcon} me-1`;
    icon.setAttribute('aria-hidden', 'true');

    strong.appendChild(icon);
    message.appendChild(strong);
    message.appendChild(document.createTextNode(toastMessage));

    body.appendChild(message);

    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'btn-close me-2 m-auto';
    closeButton.setAttribute('data-bs-dismiss', 'toast');
    closeButton.setAttribute('aria-label', 'Close');

    const closeIcon = document.createElement('span');
    closeIcon.className = 'fa-solid fa-xmark';
    closeIcon.setAttribute('aria-hidden', 'true');

    closeButton.appendChild(closeIcon);

    flex.append(body, closeButton);
    toast.appendChild(flex);

    toastContainer.appendChild(toast);

    const toastInstance = bootstrap.Toast.getOrCreateInstance(toast, {
        autohide: true
    });

    toastInstance.show();

    toast.addEventListener('hidden.bs.toast', () => {
        toast.remove();
    });
};
