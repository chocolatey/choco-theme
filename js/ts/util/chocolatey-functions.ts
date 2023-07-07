// Trims off spaces from the beginning and end of a string and replaces it
export const trimString = (item: { innerHTML: string; }) => {
    item.innerHTML = item.innerHTML.trim();
};

// Get cookies
export const getCookie = (name: string): string | false => {
    const pattern = RegExp(`${name}=.[^;]*`);
    const matched = document.cookie.match(pattern);

    if (matched) {
        const cookie = matched[0].split('=');
        return cookie[1];
    }

    return false;
};

// Set a cookie value that never expires based on current date
export const setCookieExpirationNever = (): string => {
    const d = new Date();
    // 100 years in milliseconds: 100 years * 365 days * 24 hours * 60 minutes * 60 seconds * 1000ms
    d.setTime(d.getTime() + (100 * 365 * 24 * 60 * 60 * 1000));
    return `expires=${d.toUTCString()};`;
};
