import { toastTrigger } from './toast-trigger';
import { dataTableReload } from './datatable-reload';

export const toastSuccessReloadTable = (message, tables, retainPaging = false) => {
    // Show toast
    toastTrigger(message, 'success');

    // Reload table
    dataTableReload(tables, retainPaging);
};
