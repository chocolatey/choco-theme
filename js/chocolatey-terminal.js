(function() {
    if (jQuery('#terminal .card-body').length) {
        var phrasesSpan = jQuery('#terminal .card-body span[data-animate]');
        var phrases = jQuery('#terminal .card-body span[data-animate]').attr('data-animate').split(',');
        var index = 0;
        var position = 0;
        var currentString = '';
        var direction = 1;
        var animate = function () {
            position += direction;
            if (!phrases[index]) {
                index = 0;
            } else if (position < -1) {
                index++;
                direction = 1;
            } else if (phrases[index][position] !== undefined) {
                currentString = phrases[index].substr(0, position);
                phrasesSpan = phrasesSpan.html(currentString);
                // if we've arrived at the last position reverse the direction
            } else if (position > 0 && !phrases[index][position]) {
                currentString = phrases[index].substr(0, position);
                direction = -1;
                phrasesSpan = phrasesSpan.html(currentString);
                return setTimeout(animate, 2000);
            }
            phrasesSpan = phrasesSpan.html(currentString);
            setTimeout(animate, 100);
        }
        animate();
    }
})();