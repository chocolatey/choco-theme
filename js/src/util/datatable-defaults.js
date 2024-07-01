import { choco } from './defaults';
import { params } from './params';

const defaultPageLength = params.pageSize ? params.pageSize : choco.tablePageSize;
const defaultPageNumber = params.pageNumber ? parseInt(defaultPageLength) * (parseInt(params.pageNumber) - choco.tablePageNumber) : choco.tableIndexPageNumber;

export const dataTableDefaults = {
    serverSide: true,
    autoWidth: false,
    processing: true,
    layout: {
        topEnd: null,
        topStart: null,
        bottomStart: ['info', 'pageLength']
    },
    order: [],
    pageLength: defaultPageLength,
    displayStart: defaultPageNumber
};
