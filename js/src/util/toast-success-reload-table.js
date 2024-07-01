import { toastSuccess } from './toast-success';
import 'datatables.net-bs5';

export const toastSuccessReloadTable = (message, tables, serverSide) => {
    // Show toast
    toastSuccess(message);

    // Reload tables
    if (serverSide) {
        tables.draw();
    } else {
        tables.ajax.reload();
    }
};
