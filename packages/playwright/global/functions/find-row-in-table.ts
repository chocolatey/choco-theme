import type { Locator, Page } from '@playwright/test';

// functions
import { waitForTables } from '@choco-playwright/functions/wait-for-tables';

/**
 * Finds the first row with specific text in a table and returns the locator for that row.
 * @function findRowInTable
 * @param {Page} page - The Playwright page instance.
 * @param {string} text - The text you are searching for in the table.
 * @param {number} {maxPages=MAX_PAGES} - Maximum number of pages to check before giving up.
 * @returns {Locator} - Locator for the row.
 */

const MAX_PAGES = 100;

export const findRowInTable = async (page: Page, text: string, maxPages: number = MAX_PAGES): Promise<Locator> => {
    const btnNext = page.getByRole('link', { name: 'Next' });

    for (let currentPage = 0; currentPage < maxPages; currentPage++) {
        const row = page.locator('tr', { has: page.locator('td', { hasText: text })});

        if (await row.count() > 0) {
            return row.first();
        }

        // Check if the Next button exists on the page
        if (await btnNext.count() === 0) {
            break;
        }

        // Check if the Next button is disabled via aria-disabled or the standard disabled attribute
        const ariaDisabled = await btnNext.getAttribute('aria-disabled');
        if (ariaDisabled === 'true') {
            break;
        }

        await btnNext.click();
        await waitForTables(page);
    }

    throw new Error(`Row with text "${text}" not found in the table after checking ${maxPages} page(s).`);
};