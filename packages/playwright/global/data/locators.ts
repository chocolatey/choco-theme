// types
import type { Page } from '@playwright/test';

const selectors = {
    btnAction: '#mainActionButton',
    btnThemeToggle: '.dropdown-theme .dropdown-toggle',
};

export const locatorsGlobal = (page: Page) => ({
    theme: {
        btnToggle: page.locator(`${selectors.btnThemeToggle}:visible`),
        btnToggleIcon: page.locator(`${selectors.btnThemeToggle}:visible .fa-solid`),
        dropdownMenu: page.locator(`${selectors.btnThemeToggle} + .dropdown-menu.show`)
    },
    components: {
        breadcrumbs: page.locator('nav .breadcrumb'),
        btnAction: page.locator(selectors.btnAction),
        btnActionDropdown: page.locator(`${selectors.btnAction} + .dropdown-menu.show`),
        cardLast: page.locator('main .card:not(.dt-processing)').last(),
        toastContainer: page.locator('.toast-container')
    },
    landmarks: {
        body: page.locator('body'),
        html: page.locator('html'),
        main: page.locator('main'),
        pageTitle: page.locator('h1'),
        skipLink: page.locator('#skip')
    },
    modals: {
        btnCancel: page.locator('.modal-footer button.close-button'),
        btnSave: page.locator('.modal-footer button.save-button'),
        content: page.locator('.modal.show .modal-content'),
        open: page.locator('body.modal-open'),
    },
    swalModal: {
        btnCancel: page.locator('.swal2-cancel'),
        btnConfirm: page.locator('.swal2-confirm'),
        btnDeny: page.locator('.swal2-deny'),
        modal: page.locator('.swal2-popup'),
        title: page.locator('.swal2-title'),
        contents: page.locator('.swal2-html-container')
    },
    tables: {
        targetActionCell: page.locator('.target-row td:first-child')
    }
});
