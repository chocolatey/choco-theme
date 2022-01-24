(function() {
    var toggleFadeShow = document.querySelectorAll('.toggle-fade-show'),
        toggleFadeShowContainer = document.querySelectorAll('.toggle-fade-show-container');

    toggleFadeShow.forEach(function(el) {
        el.addEventListener('click', function() {
            for (var i of toggleFadeShowContainer) {
                i.classList.toggle('show');
            }
        })
    });
})();