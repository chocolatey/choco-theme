(function() {
    const table = jQuery('table'),
          themeToggle = jQuery('.theme-toggle'),
          themeMode = jQuery('html');

    // Toggle theme but do not allow in IE (not supported)
    if(!/MSIE \d|Trident.*rv:/.test(navigator.userAgent))
    {
        const themePreference = localStorage.getItem('theme');

        // On load find if user has set a preference & toggle
        if (themePreference) {
            if (themePreference == 'dark') {
                themeToggle.prop('checked', true);
                table.addClass('table-dark');
            }
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            themeToggle.prop('checked', true);
            table.addClass('table-dark');
        }

        // Detect system color scheme changes while user is on page
        jQuery(window.matchMedia('(prefers-color-scheme: dark)')).on('change', function(e) {
            const newThemePreference = e.matches ? "dark" : "light";

            if (newThemePreference == 'dark' && !localStorage.getItem('theme')) {
                themeToggle.prop('checked', true);
                darkModeClasses();
            } else if (!localStorage.getItem('theme')) {
                themeToggle.prop('checked', false);
                lightModeClasses();
            }
        });

        themeToggle.click(function() {
            themeToggle.not(this).prop('checked', this.checked);

            if (themeToggle.is(':checked')) {
                jQuery('html').attr('data-user-color-scheme', 'dark');
                localStorage.setItem('theme', 'dark');
                darkModeClasses();
            } else {
                jQuery('html').attr('data-user-color-scheme', 'light');
                localStorage.setItem('theme', 'light');
                lightModeClasses();
            }
        });
    } else {
        themeToggle.attr('disabled', 'true').next().addClass('disabled');
    }

    function darkModeClasses() {
        table.addClass('table-dark');
        themeMode.addClass('dark-theme');
        themeMode.removeClass('light-theme');
    }

    function lightModeClasses() {
        table.removeClass('table-dark');
        themeMode.addClass('light-theme');
        themeMode.removeClass('dark-theme');
    }
})();