import { Tab } from 'bootstrap';
import { DateTime } from 'luxon';

// Replaces jQuery outerHeight(true)
export const outerHeightTrue = el => {
    const rect = el.getBoundingClientRect();

    return rect.height;
};

// Replaces jQuery .offset().top https://stackoverflow.com/a/28222246/10430540
export const getOffset = el => {
    const rect = el.getBoundingClientRect();

    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
};

// Functions based on viewport
const getElementHeight = () => {
    // Get window height
    const vh = window.innerHeight * 0.01;
    document.querySelector('html').setAttribute('style', `--vh:${vh}px;`);

    // Get main height
    const mh = window.innerHeight - outerHeightTrue(document.querySelector('header')) - outerHeightTrue(document.querySelector('footer'));
    document.querySelector('main').setAttribute('style', `--mh:${mh}px;`);
};

getElementHeight();
window.onresize = getElementHeight;

// Set a cookie value that never expires based on current date
export const setCookieExpirationNever = () => {
    const d = new Date();
    // 100 years in milliseconds: 100 years * 365 days * 24 hours * 60 minutes * 60 seconds * 1000ms
    d.setTime(d.getTime() + (100 * 365 * 24 * 60 * 60 * 1000));
    return `expires=${d.toUTCString()};`;
};

// Get cookies
export const getCookie = name => {
    const pattern = RegExp(`${name}=.[^;]*`);
    const matched = document.cookie.match(pattern);

    if (matched) {
        const cookie = matched[0].split('=');
        return cookie[1];
    }

    return false;
};

// Get parents of an element and push to array
export const getParents = el => {
    const parents = [];
    let node = el;

    while (node != document) {
        parents.push(node.parentNode);
        node = node.parentNode;
    }

    return parents;
};

// Escape special chars from Id elements
export const escapeId = el => el.replace(/[.]/g, '\\$&');

// Trims off spaces from the beginning and end of a string and replaces it
export const trimString = item => {
    item.innerHTML = item.innerHTML.trim();
};

// Convert event time to local/utc
const convertEventTimeToLocal = document.querySelectorAll('.convert-utc-to-local');
convertEventTimeToLocal.forEach(el => {
    const timeIncludeBreak = el.getAttribute('data-event-include-break');
    const timeOccurrence = el.getAttribute('data-event-occurrence');
    const definedDate = DateTime.fromISO(el.getAttribute('data-event-utc'));

    let timeIncludeBreakText;
    let timeOccurrenceText;

    if (timeIncludeBreak == 'true') {
        timeIncludeBreakText = '<br />';
    } else if (timeOccurrence == '-2' && definedDate <= DateTime.utc().toISO()) {
        timeIncludeBreakText = ' ';
    } else {
        timeIncludeBreakText = 'at ';
    }

    switch (timeOccurrence) {
        case '0':
            timeOccurrenceText = `Every ${definedDate.toLocal().toFormat('cccc')} ${timeIncludeBreakText}`;
            break;
        case '1':
            timeOccurrenceText = `First ${definedDate.toLocal().toFormat('cccc')} of Every Month ${timeIncludeBreakText}`;
            break;
        case '-1':
            timeOccurrenceText = `${definedDate.toLocal().toFormat('cccc, dd LLL yyyy')}${timeIncludeBreakText}`;
            break;
        case '-2':
            timeOccurrenceText = `${definedDate.toLocal().toFormat('cccc, dd LLL yyyy')} ${timeIncludeBreakText}`;
            break;
        default:
            timeOccurrenceText = '';
    }

    if (timeOccurrence) {
        if (timeOccurrence == '-2' && definedDate <= DateTime.utc().toISO()) {
            el.innerHTML = `Webinar Replay from${timeIncludeBreakText}${definedDate.toLocal().toFormat('cccc, dd LLL yyyy')}`;
        } else {
            el.innerHTML = `${timeOccurrenceText}${definedDate.toLocal().toFormat('h:mm a ZZZZ')} / ${definedDate.toUTC().toFormat('h:mm a ZZZZ')}`;
        }

        return;
    }

    el.innerHTML = `${definedDate.toLocal().toFormat('cccc, dd LLL yyyy ')}${timeIncludeBreakText}${definedDate.toLocal().toFormat('h:mm a ZZZZ')} / ${definedDate.toUTC().toFormat('h:mm a ZZZZ')}`;
});

export const copyCodeBlocks = () => {
    document.querySelectorAll('.copy-command').forEach(el => {
        const copyCommand = el.querySelector('code').getAttribute('class').split(' ');
        const copyBtn = el.querySelector('button');

        if (copyBtn) {
            copyBtn.classList.add('btn-copy');
            copyBtn.setAttribute('data-clipboard-target', `.${copyCommand[0]}`);
        }
    });
};

export const selectDeploymentMethodTab = () => {
    const selectedDeploymentMethod = getCookie('deployment_method') ? document.querySelectorAll(`[data-deployment-method="${getCookie('deployment_method')}"]`) : document.querySelectorAll('[data-deployment-method="individual"]');

    for (const i of selectedDeploymentMethod) {
        const selectedMethodTab = Tab.getOrCreateInstance(i, { toggle: false });
        selectedMethodTab.show();
    }
};

export const syncScroll = (el1, el2) => {
    el1.scrollLeft = el2.scrollLeft;
};

// Set deployment method cookie
const deploymentMethods = document.querySelectorAll('[data-deployment-method]');
const deploymentMethodHash = window.location.hash.toString().toLowerCase().substring(1);
const deploymentMethodHashArray = [];

deploymentMethods.forEach(el => {
    const deploymentMethod = el.getAttribute('data-deployment-method');

    if (!deploymentMethodHashArray.includes(deploymentMethod)) {
        deploymentMethodHashArray.push(deploymentMethod);
    }

    el.addEventListener('click', () => {
        document.cookie = `deployment_method=${deploymentMethod}; path=/`;
    }, false);
});

if (deploymentMethodHashArray.includes(deploymentMethodHash)) {
    document.cookie = `deployment_method=${deploymentMethodHash}; path=/`;
}

// Show more or hide truncated results on click
export const truncateResults = btnId => {
    if (btnId) {
        btnId.addEventListener('click', () => {
            const results = document.querySelectorAll('tr.truncate-results');

            for (const i of results) {
                if (i.classList.contains('d-none')) {
                    i.classList.remove('d-none');
                } else {
                    i.classList.add('d-none');
                }
            }
        });
    }
};

// Remove line breaks
export const removeLineBreaks = str => {
    return str.split(/\r?\n/) // Split input text into an array of lines
        .filter(line => line.trim() !== '') // Filter out lines that are empty or contain only whitespace
        .join('\n'); // Join line array into a string
};

export const escapeHTML = str => {
    const escapeChars = {
        '¢': 'cent',
        '£': 'pound',
        '¥': 'yen',
        '€': 'euro',
        '©': 'copy',
        '®': 'reg',
        '<': 'lt',
        '>': 'gt',
        '"': 'quot',
        '&': 'amp',
        '\'': '#39'
    };

    let regexString = '[';

    for (const key in escapeChars) {
        regexString += key;
    }

    regexString += ']';

    const regex = new RegExp(regexString, 'g');

    return str.replace(regex, m => {
        return `&${escapeChars[m]};`;
    });
};
