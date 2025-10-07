import { dataTableReload } from './datatable-reload';

export const dataTableReloadAuto = (table, intervalTime) => {
    setInterval(() => {
        dataTableReload(table, true);
    }, intervalTime);
};
