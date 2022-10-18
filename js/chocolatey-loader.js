(() => {
    const authenticationErrors = document.querySelectorAll('.authentication-error');
    const loader = document.querySelector('#loader');

    for (const i of authenticationErrors) {
        i.remove();
    }

    // Manually remove loader so it's not still playing animation in the background
    if (loader) {
        setTimeout(() => loader.remove(), 5000);
    }
})();
