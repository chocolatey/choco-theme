(() => {
    const enableDropdownHover = () => {
        const dropdownHoverList = document.querySelectorAll('.dropdown-hover .dropdown-toggle');

        dropdownHoverList.forEach(el => {
            const dropdownHoverEl = bootstrap.Dropdown.getOrCreateInstance(el);

            el.parentElement.addEventListener('mouseover', () => {
                if (!el.nextElementSibling.classList.contains('show')) {
                    el.addEventListener('show.bs.dropdown', () => {
                        el.parentElement.classList.add('active');
                    });

                    dropdownHoverEl.show();
                }
            });

            el.addEventListener('hide.bs.dropdown', () => {
                el.parentElement.classList.remove('active');
            });

            el.parentElement.addEventListener('mouseleave', () => {
                dropdownHoverEl.hide();
            });
        });
    };

    if (window.matchMedia('(min-width: 768px)').matches) {
        enableDropdownHover();
    }

    window.addEventListener('resize', () => {
        if (window.matchMedia('(min-width: 768px)').matches) {
            enableDropdownHover();
        }
    });
})();
