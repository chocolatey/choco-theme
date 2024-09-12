import { toastSuccess } from './toast-success';
import { dataTableReload } from './datatable-reload';

export const toastSuccessReloadTable = (message, tables, retainPaging = false) => {
    // Show toast
    toastSuccess(message);

    // Reload table
    dataTableReload(tables, retainPaging);
};
