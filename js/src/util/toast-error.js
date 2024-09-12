const toast = document.querySelector('.toast');

export const toastError = toastMessage => {
    const toastInstance = bootstrap.Toast.getOrCreateInstance(toast, { autohide: true });

    toast.classList.add('text-bg-danger');
    toast.classList.remove('text-bg-success');
    toast.classList.remove('text-bg-warning');
    toast.querySelector('.toast-message strong').innerHTML = `<i class="fa-solid fa-ban me-1"></i>${toastMessage}`;
    toastInstance.show();
};
