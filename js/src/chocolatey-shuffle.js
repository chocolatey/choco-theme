import jQuery from 'jquery';

(() => {
    jQuery('.shuffle').each((index, element) => {
        const divs = jQuery(element).children().has('img');

        while (divs.length) {
            jQuery(element).prepend(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
    });
})();
