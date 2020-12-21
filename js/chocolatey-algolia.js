(function() {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0,
          windowWidth = $(window).width(),
          searchQuery = $('#searchQuery'),
          searchBox = $('#searchBox'),
          topNav = $('#topNav'),
          topNavBtnSearch = topNav.find('.btn-search'),
          topNavBtnSearchClose = topNav.find('.btn-search-close'),
          topNavNavbarBrand = topNav.find('.navbar-brand'),
          topNavNavbarNav = topNav.find('.navbar-nav'),
          topNavNavbarToggler = topNav.find('.navbar-toggler');
          
    // Insert correct command key in search box based on OS
    // Open search box on command key press
    if (isMac) {
        $('.search-key').html('&#8984;');
        Mousetrap.bind('command+k', function() {
            searchQuery.focus();
            return false;
        });
    } else {
        $('.search-key').text('ctrl');
        Mousetrap.bind('ctrl+k', function() {
            searchQuery.focus();
            return false;
        });
    }

    // Mobile search
    topNavBtnSearch.click(function() {
        topNav.css('height', topNav.outerHeight(true));
        searchBox.add(topNavBtnSearchClose).removeClass('d-none');
        topNavNavbarBrand.add(topNavNavbarNav).add(topNavNavbarToggler).addClass('d-none');
        searchQuery.focus();
    });
    topNavBtnSearchClose.click(function() {
        closeMobileSearch();
    });
    $(window).on("resize", function () {
        if($(window).width() != windowWidth) {
            closeMobileSearch();
        }
    });
    function closeMobileSearch() {
        topNav.css('height', '');
        searchBox.add(topNavBtnSearchClose).addClass('d-none');
        topNavNavbarBrand.add(topNavNavbarNav).add(topNavNavbarToggler).removeClass('d-none');
    }

    // Triggered when the search box is focused
    searchQuery.focus(function() {
        $(this).parentsUntil('form').parent().addClass('active');
    });
    
    // Triggered when the user clicks away from the search box
    searchQuery.blur(function() {
        $(this).parentsUntil('form').parent().removeClass('active');
    });
})();
