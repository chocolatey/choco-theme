(function() {
    let searchParams = new URLSearchParams(window.location.search.toLowerCase());

    if((searchParams.get('q') === 'choco') || (searchParams.get('q') === 'chocolatey') || (window.location.pathname.toLowerCase().indexOf('/packages/chocolatey') > -1)) {
        confettiBurst();
        return;
    }

    var birthdayCookie = 'chocolatey_11_birthday';

    if (getCookie(birthdayCookie)) {
        return;
    }

    if (~location.hostname.indexOf('chocolatey.org')) {
        document.cookie = birthdayCookie + '=true; ' + setCookieExpirationNever() + 'path=/; domain=chocolatey.org;';
    } else {
        document.cookie = birthdayCookie + '=true;' + setCookieExpirationNever() + 'path=/;';
    }

    confettiBurst();

    function confettiBurst() {
        var duration = 2 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0, disableForReducedMotion: true };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        var interval = setInterval(function() {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            var particleCount = 50 * (timeLeft / duration);
            
            // since particles fall down, start a bit higher than random
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    }
})();