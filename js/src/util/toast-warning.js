const toast = document.querySelector('.toast');

export const toastWarning = toastMessage => {
    const toastInstance = bootstrap.Toast.getOrCreateInstance(toast, { autohide: true });

    toast.classList.add('text-bg-warning');
    toast.classList.remove('text-bg-success');
    toast.classList.remove('text-bg-danger');
    toast.querySelector('.toast-message strong').innerHTML = `<i class="fa-solid fa-triangle-exclamation me-1"></i>${toastMessage}`;
    toastInstance.show();
};
