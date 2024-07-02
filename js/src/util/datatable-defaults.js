import { choco } from './defaults';
import { getCookie } from './get-cookie';
import { params } from './params';

export const dataTableDefaults = (table = 'table') => {
    let defaultPageLength;
    let defaultDisplayStart;
    const defaultLengthMenu = [5, 10, 25, 50, 100, 250, 500];
    const lengthMenuCookie = getCookie(`${table}_PageLength`);

    if (params.pageSize) {
        defaultPageLength = params.pageSize;
    } else if (lengthMenuCookie && defaultLengthMenu.includes(parseInt(lengthMenuCookie))) {
        defaultPageLength = lengthMenuCookie;
    } else {
        defaultPageLength = choco.tablePageSize;
    }

    if (params.pageNumber) {
        defaultDisplayStart = parseInt(defaultPageLength) * (parseInt(params.pageNumber) - choco.tablePageNumber);
    } else {
        defaultDisplayStart = choco.tableIndexPageNumber;
    }

    return {
        serverSide: true,
        autoWidth: false,
        processing: true,
        layout: {
            topEnd: null,
            topStart: null,
            bottomStart: ['info', 'pageLength']
        },
        order: [],
        lengthMenu: defaultLengthMenu,
        pageLength: +defaultPageLength,
        displayStart: +defaultDisplayStart
    };
};
