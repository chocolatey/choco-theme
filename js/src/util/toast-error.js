import { Toast } from 'bootstrap';

const toast = document.querySelector('.toast');

export const toastError = toastMessage => {
    const toastInstance = Toast.getOrCreateInstance(toast, { autohide: true });

    toast.classList.add('text-bg-danger');
    toast.querySelector('.toast-message strong').innerHTML = `<i class="fa-solid fa-ban me-1"></i>${toastMessage}`;
    toastInstance.show();
};
