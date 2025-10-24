(() => {
    const themeDropdownContainers = document.querySelectorAll('.dropdown-theme');

    themeDropdownContainers.forEach(dropdownContainer => {
        dropdownContainer.querySelectorAll('.dropdown-toggle').forEach(el => {
            el.addEventListener('hide.bs.dropdown', () => {
                document.querySelectorAll('main').forEach(main => {
                    main.classList.remove('z-0');
                });
            });

            el.addEventListener('show.bs.dropdown', () => {
                document.querySelectorAll('main').forEach(main => {
                    main.classList.add('z-0');
                });
            });
        });
    });
})();
