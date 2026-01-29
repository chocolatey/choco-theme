import type { Locator, Page } from '@playwright/test';

// functions
import { waitForTables } from '@choco-playwright/functions/wait-for-tables';

/**
 * Finds the first row with specific text in a table and returns the locator for that row.
 * @function findRowInTable
 * @param {Locator} table - The locator for the table.
 * @param {Page} page - The Playwright page instance.
 * @param {string} text - The text you are searching for in the table.
 * @returns {Locator} - Locator for the row.
 */

export const findRowInTable = async(table: Locator, page: Page, text: string) => {
    const btnNext = page.getByRole('link', { name: 'Next' });

    while(true) {
        const row = page.locator('tr', { has: page.locator('td', { hasText: text })});

        if (await row.count() > 0) {
            return row.first();
        }

        const ariaDisabled = await btnNext.getAttribute('aria-disabled');

        if (ariaDisabled) {
            break;
        }

        await btnNext.click();
        await waitForTables(page);
    }

    throw new Error(`${text} not found in the table after checking all pages.`);
};