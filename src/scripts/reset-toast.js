(() => {
    const toast = document.querySelector('.toast');

    if (toast) {
        toast.addEventListener('hidden.bs.toast', () => {
            toast.classList.remove('text-bg-success', 'text-bg-danger', 'text-bg-secondary');
        });
    }
})();
