(() => {
    document.querySelectorAll('[data-substring]').forEach(el => {
        const subStringLength = parseInt(el.getAttribute('data-substring')) - 1;

        if (el.innerText.length > subStringLength) {
            const subString = el.innerText.substring(0, subStringLength);
            const subStringLink = el.getAttribute('data-link');

            // If a 'data-link' is supplied link the "..."
            if (typeof subStringLink !== typeof undefined && subStringLink !== false) {
                el.innerHTML = `${subString}<a href="${subStringLink}"><strong>...</strong></a>`;
                return;
            }

            el.innerHTML = `${subString}...`;
        }
    });
})();
