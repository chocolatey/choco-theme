(function() {
    // Set Login/Logoff Navigation
    $(function () {
        // Only check authentication on certain parts of the site
        var authenticatedURL = window.location.href.indexOf("/packages") > -1 || window.location.href.indexOf("/courses") > -1 || window.location.href.indexOf("/account") > -1 || window.location.href.indexOf("/profiles") > -1;
        if (authenticatedURL) {
            $.ajax({
                type: "POST",
                url: window.location.protocol + "//" + window.location.host,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: authenticationSuccess
            });
        }
    });

    function authenticationSuccess(data, status) {
        var authenticated = document.getElementsByTagName("BODY")[0];

        if (data.isAuthenticated) {
            authenticated.classList.add('user-authenticated');
        }
    }
})();