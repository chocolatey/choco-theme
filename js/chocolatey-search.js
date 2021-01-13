(function() {
    var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0,
        mediaMd = window.matchMedia("(min-width: 768px)"),
        searchInput = document.querySelector('.search-box .search-input'),
        topNav = document.querySelector('#topNav'),
        searchKey = document.querySelector('.search-key'),
        topNavBtnSearch = topNav.querySelector('.btn-search'),
        topNavBtnSearchClose = topNav.querySelector('.btn-search-close');

    searchDocs(mediaMd);
    mediaMd.addListener(searchDocs);

    if (isMac && searchKey) {
        searchKey.innerHTML = '&#8984;';
        Mousetrap.bind('command+k', function() {
            searchKeys();
            return false;
        });
    } else if (!isMac && searchKey) {
        searchKey.innerHTML = 'ctrl';
        Mousetrap.bind('ctrl+k', function() {
            searchKeys();
            return false;
        });
    }

    if (topNavBtnSearch) {
        topNavBtnSearch.addEventListener('click', searchActive);
        topNavBtnSearchClose.addEventListener('click', searchInactive);
    }

    function searchDocs() {
        if (mediaMd.matches && document.querySelector('.chocolatey-docs')) {
            topNav.classList.add('active-search');
        } else if (document.querySelector('.chocolatey-docs')) {
            topNav.classList.remove('active-search');
        }
    }

    function searchActive() {
        topNav.style.height = topNav.offsetHeight + 'px';
        topNav.classList.add('active-search');
        searchInput.focus();
    }

    function searchInactive() {
        topNav.style.height = '';
        topNav.classList.remove('active-search');
    }

    function searchKeys() {
        if (topNavBtnSearch) {
            if (topNav.classList.contains('active-search')) {
                searchInput.focus();
            } else {
                searchActive();
            }
        } else {
            searchInput.focus();
        }
    }
})();