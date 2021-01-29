(function() {
    $('.shuffle').each(function () {
        var divs = $(this).children().has('img');
        while (divs.length) {
            $(this).prepend(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
        }
    });
})();