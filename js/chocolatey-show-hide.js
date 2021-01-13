(function () {
    var btnShowHide = document.querySelectorAll('.btn-show-hide');

    if (btnShowHide) {
        btnShowHide.forEach(function (el) {
            el.addEventListener('click', function () {
                if (el.textContent.includes('Show')) {
                    return el.textContent = el.textContent.replace('Show', 'Hide');
                } else if (el.textContent.includes('Hide')) {
                    return el.textContent = el.textContent.replace('Hide', 'Show');
                }
            });
        });
    }
})();