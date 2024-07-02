export const dataTableReload = (table, retainPaging = false) => {
    const tableApi = table.api ? table.api : table;

    if (retainPaging) {
        tableApi.ajax.reload(null, false);
    } else {
        tableApi.ajax.reload();
    }
};
