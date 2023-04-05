const Mousetrap = require('mousetrap');

(() => {
    const isMac = navigator.userAgent.indexOf('Mac OS X') != -1;
    const searchInput = document.querySelector('.search-box .search-input');
    const topNav = document.querySelector('#topNav');
    const searchKey = document.querySelector('.search-key');

    const searchActive = () => {
        topNav.style.height = `${topNav.offsetHeight}px`;
        topNav.classList.add('active-search');
        searchInput.focus();
    };

    const searchInactive = () => {
        topNav.style.height = '';
        topNav.classList.remove('active-search');
    };

    if (topNav) {
        const topNavBtnSearch = topNav.querySelector('.btn-search');
        const topNavBtnSearchClose = topNav.querySelector('.btn-search-close');

        if (topNavBtnSearch) {
            topNavBtnSearch.addEventListener('click', searchActive);
            topNavBtnSearchClose.addEventListener('click', searchInactive);
        }
    }

    const searchKeys = () => {
        if (topNav) {
            const topNavBtnSearch = topNav.querySelector('.btn-search');

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
    };

    if (isMac && searchKey) {
        searchKey.innerHTML = '&#8984;';
        Mousetrap.bind('command+k', () => {
            searchKeys();
            return false;
        });
    } else if (!isMac && searchKey) {
        searchKey.innerHTML = 'ctrl';
        Mousetrap.bind('ctrl+k', () => {
            searchKeys();
            return false;
        });
    }
})();
