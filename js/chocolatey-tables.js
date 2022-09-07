(() => {
    const table = document.querySelectorAll('table');

    // Style Tables
    if (table) {
        table.forEach(el => {
            el.classList.add('table', 'table-bordered', 'table-striped');
            el.outerHTML = `<div class="table-responsive">${el.outerHTML}</div>`;
        });
    }
})();
