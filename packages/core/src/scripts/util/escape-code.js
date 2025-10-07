export const escapeCode = str => {
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
