import jQuery from 'jquery';

(() => {
    // Set Login/Logoff Navigation
    const authenticationSuccess = data => {
        if (data.isAuthenticated) {
            const authenticatedName = document.querySelectorAll('.user-authenticated-name');

            document.body.classList.add('user-authenticated');

            for (const i of authenticatedName) {
                if (i.nodeName === 'A') {
                    i.setAttribute('href', `/profiles/${data.userName}`);
                } else {
                    i.innerText = data.userName;
                }
            }
        } else {
            document.body.classList.add('user-unauthenticated');
        }
    };

    const authenticationError = () => {
        document.body.classList.add('user-unauthenticated');
    };

    jQuery.ajax({
        type: 'POST',
        url: `${window.location.protocol}//${window.location.host}`,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: authenticationSuccess,
        error: authenticationError
    });
})();
