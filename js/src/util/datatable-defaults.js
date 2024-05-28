import { choco } from './defaults';
import { params } from './params';

const defaultPageLength = params.pageSize ? params.pageSize : choco.tablePageSize;
const defaultPageNumber = params.pageNumber ? parseInt(defaultPageLength) * (parseInt(params.pageNumber) - choco.tablePageNumber) : choco.tableIndexPageNumber;

export const dataTableDefaults = {
    paging: true,
    serverSide: true,
    autoWidth: false,
    deferRender: true,
    processing: true,
    responsive: false,
    layout: {
        topEnd: null,
        topStart: null,
        bottomStart: ['info', 'pageLength']
    },
    order: [],
    pageLength: defaultPageLength,
    displayStart: defaultPageNumber
};
