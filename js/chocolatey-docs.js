(function() {
    // JS only used on docs.chocolatey.org
    // Show/hide child page title
    var titleChild = document.querySelector('h2.title-child');

    if (titleChild) {
        var allTitles = document.querySelectorAll('h2');

        if (!allTitles[0].classList.contains('title-child')) {
            titleChild.classList.remove('d-none');
        }
    }
})();