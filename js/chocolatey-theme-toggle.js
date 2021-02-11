(function() {
    const table = jQuery('table'),
          themeToggle = jQuery('#themeToggle');

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
                table.addClass('table-dark');
            } else if (!localStorage.getItem('theme')) {
                themeToggle.prop('checked', false);
                table.removeClass('table-dark');
            }
        });

        themeToggle.click(function() {
            if (themeToggle.is(':checked')) {
                jQuery('html').attr('data-user-color-scheme', 'dark');
                localStorage.setItem('theme', 'dark');
                table.addClass('table-dark');
            } else {
                jQuery('html').attr('data-user-color-scheme', 'light');
                localStorage.setItem('theme', 'light');
                table.removeClass('table-dark');
            }
        });
    } else {
        themeToggle.attr('disabled', 'true').next().addClass('disabled');
    }
})();