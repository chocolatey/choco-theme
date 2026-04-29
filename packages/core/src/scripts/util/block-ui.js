const pageBlocker = document.getElementById('pageBlocker');

export const blockUI = element => {
    if (element) {
        element.classList.add('block-ui');
    } else {
        pageBlocker?.classList.remove('d-none');
    }
};

export const unblockUI = element => {
    if (element) {
        element.classList.remove('block-ui');
    } else {
        pageBlocker?.classList.add('d-none');
    }
};
