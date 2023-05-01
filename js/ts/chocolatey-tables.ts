(() => {
    const table: NodeListOf<HTMLTableElement> = document.querySelectorAll('table');

    // Style Tables
    if (table) {
        table.forEach((el: HTMLTableElement) => {
            el.classList.add('table', 'table-bordered', 'table-striped');
            el.outerHTML = `<div class="table-responsive">${el.outerHTML}</div>`;
        });
    }
})();
