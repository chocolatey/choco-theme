(() => {
    const themeSelectorToggles = document.querySelectorAll('.theme-toggle');

    if (themeSelectorToggles) {
        // Set checkbox value for all toggles
        const copyCheckboxValue = el => {
            for (const i of themeSelectorToggles) {
                if (el.checked) {
                    i.checked = true;
                } else {
                    i.checked = false;
                }
            }
        };

        themeSelectorToggles.forEach(el => {
            const htmlRoot = document.querySelector('html');
            const themeQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const themeStorage = localStorage.getItem('theme');
            const tables = document.querySelectorAll('table');

            const setAdditionalClasses = themePrefers => {
                if (themePrefers == 'dark') {
                    for (const i of tables) {
                        i.classList.add('table-dark');
                    }
                } else {
                    for (const i of tables) {
                        i.classList.remove('table-dark');
                    }
                }
            };

            const setToggle = themePrefers => {
                if (themePrefers == 'dark') {
                    el.checked = true;
                } else {
                    el.checked = false;
                }

                setAdditionalClasses(themePrefers);
            };

            setToggle(htmlRoot.getAttribute('data-user-color-scheme'));

            const setTheme = () => {
                const themePrefers = el.checked ? 'dark' : 'light';

                if (el.checked) {
                    htmlRoot.classList.add('dark-theme');
                    htmlRoot.classList.remove('light-theme');
                } else {
                    htmlRoot.classList.add('light-theme');
                    htmlRoot.classList.remove('dark-theme');
                }

                htmlRoot.setAttribute('data-user-color-scheme', themePrefers);
                setAdditionalClasses(themePrefers);
            };

            el.addEventListener('change', setTheme);

            const setSystemTheme = e => {
                const themeSystem = e.matches ? 'dark' : 'light';

                if (!themeStorage) {
                    setToggle(themeSystem);
                    setTheme();
                }
            };

            themeQuery.addEventListener('change', setSystemTheme);

            el.addEventListener('click', () => {
                themeQuery.removeEventListener('change', setSystemTheme);

                if (el.checked) {
                    localStorage.setItem('theme', 'dark');
                } else {
                    localStorage.setItem('theme', 'light');
                }

                copyCheckboxValue(el);
            }, false);
        });
    }
})();
