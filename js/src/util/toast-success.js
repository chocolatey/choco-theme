import { Toast } from 'bootstrap';

const toast = document.querySelector('.toast');

export const toastSuccess = toastMessage => {
    const toastInstance = Toast.getOrCreateInstance(toast, { autohide: true });

    toast.classList.add('text-bg-success');
    toast.querySelector('.toast-message strong').innerHTML = `<i class="fa-solid fa-circle-check me-1"></i>${toastMessage}`;
    toastInstance.show();
};
