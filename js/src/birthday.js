import confetti from 'canvas-confetti';
import { setCookieExpirationNever } from './util/set-cookie-expiration-never';
import { getCookie } from './util/get-cookie';

(() => {
    const searchParams = new URLSearchParams(window.location.search.toLowerCase());

    const confettiBurst = () => {
        const duration = 2 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0, disableForReducedMotion: true };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            // since particles fall down, start a bit higher than random
            // eslint-disable-next-line object-shorthand
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            // eslint-disable-next-line object-shorthand
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    };

    if ((searchParams.get('q') === 'choco') || (searchParams.get('q') === 'chocolatey') || (window.location.pathname.toLowerCase().indexOf('/packages/chocolatey') > -1)) {
        confettiBurst();
        return;
    }

    const birthdayCookie = 'chocolatey_11_birthday';

    if (getCookie(birthdayCookie)) {
        return;
    }

    if (~location.hostname.indexOf('chocolatey.org')) {
        document.cookie = `${birthdayCookie}=true; ${setCookieExpirationNever()}path=/; domain=chocolatey.org;`;
    } else {
        document.cookie = `${birthdayCookie}=true; ${setCookieExpirationNever()}path=/;`;
    }

    confettiBurst();
})();
