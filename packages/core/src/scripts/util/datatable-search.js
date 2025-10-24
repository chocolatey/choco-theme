export const dataTableSearch = (input, table) => {
    input.addEventListener('keyup', e => {
        table.search(e.currentTarget.value).draw();
    });
};
