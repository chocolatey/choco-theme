(function() {
    const table = $('table');

    // Style Tables
    $.each(table, function () {
        $(this).wrap('<div class="table-responsive"></div>');
        $(this).addClass('table table-bordered table-striped');
    });
})();