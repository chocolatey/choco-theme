(function() {
    var clipboard = new ClipboardJS('.btn-copy');

    clipboard.on('success', function (e) {
        var button = new Button(e.trigger)
        
        setTimeout(function () { button.toggle() }, 2000);
        e.clearSelection();
    });

    // Make input text selectable with one click
    jQuery(document).on('click', 'input[type=text]', function () {
        this.select();
    });
})();