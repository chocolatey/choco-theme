import { test } from '@playwright/test';

// types
import type { Page, Locator } from '@playwright/test';

// data
import { locatorsGlobal } from '@choco-playwright/data/locators';

// functions
import { waitForTables } from '@choco-playwright/functions/wait-for-tables';

/**
 * Options for navigating to a URL via table action button.
 * @interface NavigateToUrlTableActionButtonOptions
 * @property {Page} page - The Playwright page instance.
 * @property {Locator} btnActionCell - The locator of the button action cell.
 * @property {string|null} [url=null] - The URL to navigate to (optional).
 * @property {string} option - The option to click on.
 * @property {boolean} [expectWarning=false] - Indicates if a warning is expected (optional).
 */

export interface NavigateToUrlTableActionButtonOptions {
    page: Page;
    btnActionCell: Locator;
    url?: string | null;
    option: string;
    expectWarning: boolean;
}

/**
 * Navigates to a URL via a table action button.
 * @function navigateToUrlTableActionButton
 * @param {NavigateToUrlTableActionButtonOptions} options - The options object.
 * @returns {Promise<void>} - A promise that resolves when the navigation is complete.
 * @example
 * // Navigate to the option 'Details' by clicking on the action button within the specified table cell
 * await navigateToUrlTableActionButton(
 *    page,
 *    btnActionCell: page.locator('#ComputersTable tbody tr:first-child td:first-child'),
 *    url: paths.computers.details.url,
 *    option: 'Details',
 *    expectWarning: false
 * );
 */

export const navigateToUrlTableActionButton = async ({
    page,
    btnActionCell,
    url = null,
    option,
    expectWarning = false
}: NavigateToUrlTableActionButtonOptions): Promise<void> => {
    await test.step(`Navigate to '${option}'`, async () => {
        const { swalModal } = locatorsGlobal(page);

        const btnAction = btnActionCell.locator('button.dropdown-toggle').first();

        await btnAction.click();

        const btnActionItemMenu = page.locator('.dropdown-menu.show');

        await btnActionItemMenu.getByText(option).click();

        if (expectWarning) {
            await swalModal.modal.waitFor({ state: 'attached' });

            await swalModal.btnConfirm.click();
        }

        if (url) {
            await page.waitForURL(url, { waitUntil: 'domcontentloaded' });
            await waitForTables(page);
        }
    });
};
