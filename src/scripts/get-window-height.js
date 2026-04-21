import { outerHeightTrue } from '@choco-core/util/outer-height-true';

const getWindowHeight = () => {
    // Get window height
    const vh = window.innerHeight * 0.01;
    document.querySelector('html')?.style.setProperty('--vh', `${vh}px`);

    // Get main height
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    if (!header || !footer) {
        return;
    }

    const mh = window.innerHeight - outerHeightTrue(header) - outerHeightTrue(footer);
    document.querySelector('main')?.style.setProperty('--mh', `${mh}px`);
};

getWindowHeight();
window.onresize = getWindowHeight;
