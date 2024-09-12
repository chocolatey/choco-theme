import { setCookieExpirationNever } from './set-cookie-expiration-never';

export const setCookie = (name, value, expirationDays, domainName) => {
    let expires;

    if (expirationDays === 'never') {
        expires = setCookieExpirationNever();
    } else if (expirationDays === 'expired') {
        expires = 'expires=Thu, 01 Jan 1970 00:00:00 UTC';
    } else {
        const d = new Date();

        d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
        expires = `expires=${d.toUTCString()}`;
    }

    const domain = domainName || '';

    document.cookie = `${name}=${value};${expires};path=/;${domain};`;
};
