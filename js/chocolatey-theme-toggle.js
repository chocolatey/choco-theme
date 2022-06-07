(function() {
    var themeSelectorToggles = document.querySelectorAll('.theme-toggle');

    if (themeSelectorToggles && !/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
        themeSelectorToggles.forEach(function (el) {
            var htmlRoot = document.querySelector('html'),
                themeQuery = window.matchMedia('(prefers-color-scheme: dark)'),
                themeStorage = localStorage.getItem('theme'),
                tables = document.querySelectorAll('table');

            setToggle(htmlRoot.getAttribute('data-user-color-scheme'));

            el.addEventListener('change', setTheme);

            themeQuery.addEventListener('change', setSystemTheme);

            el.addEventListener('click', function() {
                themeQuery.removeEventListener('change', setSystemTheme);

                if (el.checked) {
                    localStorage.setItem('theme', 'dark');
                } else {
                    localStorage.setItem('theme', 'light');
                }

                copyCheckboxValue(el);
            });

            function setSystemTheme(e) {
                var themeSystem = e.matches ? 'dark' : 'light';

                if (!themeStorage) {
                    setToggle(themeSystem);
                    setTheme();
                }
            }

            function setTheme() {
                var themePrefers = el.checked ? 'dark' : 'light';

                if (el.checked) {
                    htmlRoot.classList.add('dark-theme');
                    htmlRoot.classList.remove('light-theme');
                } else {
                    htmlRoot.classList.add('light-theme');
                    htmlRoot.classList.remove('dark-theme');
                }

                htmlRoot.setAttribute('data-user-color-scheme', themePrefers);
                setAdditionalClasses(themePrefers);
            }

            function setToggle(themePrefers) {
                if (themePrefers == 'dark') {
                    el.checked = true;
                } else {
                    el.checked = false;
                }

                setAdditionalClasses(themePrefers);
            }

            function setAdditionalClasses(themePrefers) {
                if (themePrefers == 'dark') {
                    for (var i of tables) {
                        i.classList.add('table-dark');
                    }
                } else {
                    for (var i of tables) {
                        i.classList.remove('table-dark');
                    }
                }
            }
        });

        // Set checkbox value for all toggles
        function copyCheckboxValue(el) {
            for (var i of themeSelectorToggles) {
                if (el.checked) {
                    i.checked = true;
                } else {
                    i.checked = false;
                }
            }
        }
    }
})();