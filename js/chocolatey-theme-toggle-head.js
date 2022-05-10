if (!/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
    const html = document.getElementsByTagName('html')[0],
          themeStorage = localStorage.getItem('theme');

    if (themeStorage) {
        html.setAttribute('data-user-color-scheme', themeStorage);
        html.classList.add(themeStorage + '-theme');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html.setAttribute('data-user-color-scheme', 'dark');
        html.classList.add('dark-theme');
    } else {
        html.setAttribute('data-user-color-scheme', 'light');
        html.classList.add('light-theme');
    }
}
