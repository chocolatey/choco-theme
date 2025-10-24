export const getCookie = (name: string): string | false => {
    const pattern = RegExp(`${name}=.[^;]*`);
    const matched = document.cookie.match(pattern);

    if (matched) {
        const cookie = matched[0].split('=');
        return decodeURIComponent(cookie[1]);
    }

    return false;
};
