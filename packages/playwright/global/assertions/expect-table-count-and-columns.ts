import { expect, test } from '@playwright/test';

// types
import type { Page, Locator } from '@playwright/test';
import type { PathTables } from '@choco-playwright/data/types';

/**
 * Asserts the number of tables on the page and their column headers.
 * @function expectTableCountAndColumns
 * @param {Page} page - The Playwright page object.
 * @param {PathTables[]} tablesExpected - An array of expected table information.
 * @returns {Promise<void>} - A promise that resolves when the assertion is complete.
 */

export const expectTableCountAndColumns = async (
    page: Page,
    tablesExpected: PathTables[]
): Promise<void> => {
    await test.step('Test number of tables and table column headers', async () => {
        // Select all tables on the page
        const tables: Locator[] = await page.locator('table').all();

        expect.soft(tables.length, 'Expect correct number of tables').toBe(tablesExpected.length);

        // Loop through each table and its corresponding expected headers
        for (const [index, table] of tables.entries()) {
            const expected = tablesExpected[index];
            const tableColumns = (await table.locator('thead tr th').allTextContents()).map(s => s.trim());

            if (!!expected.title && expected.title !== '') {
                await expect.soft(page.locator(`#${expected.section}Container h2`)).toHaveText(expected.title);
            }

            expect.soft(tableColumns.length, `${expected.section} - Expect correct number of table columns`).toBe(expected.columns.length);

            expect.soft(tableColumns, `${expected.section} - Expect correct tables column titles`).toEqual(expected.columns);

            expect.soft(tableColumns.some(column => column.toLowerCase().includes('utc')), `${expected.section} - Expect table column not to contain 'UTC' since they should be in the user time zone`).toBeFalsy();
        }
    });

    await test.step('Test default table entries', async () => {
        const selectors: Locator[] = await page.locator('select').all();

        for (const selector of selectors.values()) {
            await expect.soft(selector.locator('option:checked')).toHaveText('10');
        }
    });
};
