import { setCookie } from './set-cookie';

export const dataTableSetPageLengthCookie = table => {
    if (table) {
        const tableApi = table.api ? table.api : table;

        setCookie(`${table.sTableId}_PageLength`, tableApi.page.len(), 'never');
    }
};
