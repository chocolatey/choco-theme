(function() {
    var terminal = document.querySelector('#terminal .card-body');

    if (terminal) {
        var phrasesSpan = terminal.querySelector('span[data-animate]'),
            phrases = phrasesSpan.getAttribute('data-animate').split(','),
            index = 0,
            position = 0,
            currentString = '',
            direction = 1,
            animate = function () {
                position += direction;

                if (!phrases[index]) {
                    index = 0;
                } else if (position < -1) {
                    index++;
                    direction = 1;
                } else if (phrases[index][position] !== undefined) {
                    currentString = phrases[index].substring(0, position + 1);
                    phrasesSpan.innerHTML = currentString;
                    // if we've arrived at the last position reverse the direction
                } else if (position > 0 && !phrases[index][position]) {
                    currentString = phrases[index].substring(0, position + 1);
                    direction = -1;
                    phrasesSpan.innerHTML = currentString;

                    return setTimeout(animate, 2000);
                }

                phrasesSpan.innerHTML = currentString;

                setTimeout(animate, 100);
            };

        animate();
    }
})();