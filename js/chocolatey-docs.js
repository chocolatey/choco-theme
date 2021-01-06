(function() {
    // JS only used on docs.chocolatey.org
    // Show/hide child page title
    if (!$('h2:first-of-type').hasClass('title-child')) {
        $('.title-child').removeClass('d-none');
    }
})();