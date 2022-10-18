(() => {
    const stickyHeader = document.querySelector('header.sticky-top');

    if (stickyHeader) {
        const navImage = document.querySelector('.navbar-brand-desktop');
        const logoSmall = '/assets/images/global-shared/logo.svg';
        const logoLarge = '/assets/images/global-shared/logo-square.svg';

        document.body.classList.add('sticky-nav-active');

        if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
            navImage.setAttribute('src', logoLarge);
        }

        document.addEventListener('scroll', () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                if (stickyHeader.classList.contains('sticky-header')) {
                    stickyHeader.classList.remove('sticky-header');
                    navImage.setAttribute('src', logoSmall);
                }
            } else {
                if (!stickyHeader.classList.contains('sticky-header')) {
                    stickyHeader.classList.add('sticky-header');
                    navImage.setAttribute('src', logoLarge);
                }
            }
        });
    }
})();
