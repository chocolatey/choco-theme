(function() {
    // JS only used on docs.chocolatey.org
    // Show/hide child page title
    if (!jQuery('h2:first-of-type').hasClass('title-child')) {
        jQuery('.title-child').removeClass('d-none');
    }
})();