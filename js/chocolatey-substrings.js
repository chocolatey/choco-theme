(function() {
    document.querySelectorAll('[data-substring]').forEach(function(el) {
        var subStringLength = parseInt(el.getAttribute('data-substring')) - 1;

        if (el.innerText.length > subStringLength) {
            var subString =  el.innerText.substring(0,subStringLength),
                subStringLink = el.getAttribute('data-link');

            // If a 'data-link' is supplied link the "..."
            if (typeof subStringLink !== typeof undefined && subStringLink !== false) {
                el.innerHTML = subString + '<a href="' + subStringLink +'"><strong>...</strong></a>';
                return;
            }

            el.innerHTML = subString + '...';
            return;
        }
    });
})();