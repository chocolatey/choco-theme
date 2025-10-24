import { expect, test } from '@playwright/test';

// types
import type { Page, Locator } from '@playwright/test';

/**
 * Asserts the search inputs have correct placeholder text
 * @function expectSearchPlaceholders
 * @param {Page} page - The Playwright page object.
 * @returns {Promise<void>} - A promise that resolves when the assertion is complete.
 */

export const expectSearchPlaceholders = async (
    page: Page
): Promise<void> => {
    await test.step('Test search inputs have correct placeholder text', async () => {
        // Select all search inputs on the page
        const searchInputs: Locator[] = await page.locator('.search-input').all();

        // Loop through each table and its corresponding expected headers
        for (const input of searchInputs) {
            await expect.soft(input, `Search input #${input.getAttribute('id')} has correct placeholder text`).toHaveAttribute('placeholder', 'Search...');
        }
    });
};
