import jQuery from 'jquery';

(() => {
    // Set Login/Logoff Navigation
    const authenticationSuccess = data => {
        const authenticated = document.getElementsByTagName('BODY')[0];

        if (data.isAuthenticated) {
            authenticated.classList.add('user-authenticated');
        }
    };

    jQuery(() => {
        // Only check authentication on certain parts of the site
        const authenticatedURL =
            window.location.href.indexOf('/packages') > -1 ||
            window.location.href.indexOf('/courses') > -1 ||
            window.location.href.indexOf('/account') > -1 ||
            window.location.href.indexOf('/profiles') > -1 ||
            window.location.href.indexOf('/admin') > -1;

        if (authenticatedURL) {
            jQuery.ajax({
                type: 'POST',
                url: `${window.location.protocol}//${window.location.host}`,
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: authenticationSuccess
            });
        }
    });
})();
