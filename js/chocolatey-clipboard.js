(function() {
    var clipboard = new ClipboardJS('.btn-copy'),
        userSelectAllInput = document.querySelectorAll('.user-select-all');

    clipboard.on('success', function (e) {
        var button = new Button(e.trigger)
        
        setTimeout(function () { button.toggle() }, 2000);
        e.clearSelection();
    });

    // Make input text selectable with one click
    if (userSelectAllInput) {
        userSelectAllInput.forEach(function (el) {
            el.addEventListener('click', function () {
                el.select();
            }, false);
        });
    }
})();