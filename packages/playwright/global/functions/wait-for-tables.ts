// types
import type { Page } from '@playwright/test';

/**
 * Waits for all table loading spinners to be detached.
 * @function waitForTables
 * @param {Page} page - The Playwright page instance.
 * @returns {Promise<void>}
 */

export const waitForTables = async (page: Page): Promise<void> => {
    await page.locator('.tables-loaded').waitFor();

    // Remove the .tables-loaded class so we can properly tell the page has been reloaded later
    await page.evaluate(() => {
        const tablesLoaded = document.querySelector('.tables-loaded');
        if (tablesLoaded) {
            tablesLoaded.classList.remove('tables-loaded');
        }
    });
};
