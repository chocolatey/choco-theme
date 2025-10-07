export const dataTableLayout = instance => {
    const table = document.getElementById(instance.nTable.id);
    const tableWrapper = document.getElementById(instance.nTableWrapper.id);

    // Fix layout
    const tableInfo = tableWrapper.querySelector('.dt-info');
    tableInfo.parentElement.classList.add('d-flex');
    tableInfo.parentElement.parentElement.classList.add('align-items-center');

    // Wrap table to be responsive
    const tableResponsive = document.createElement('div');
    tableResponsive.classList.add('table-responsive');
    table.parentNode.insertBefore(tableResponsive, table);
    tableResponsive.appendChild(table);
};
