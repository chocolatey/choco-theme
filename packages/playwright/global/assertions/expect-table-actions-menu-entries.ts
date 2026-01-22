import { expect, test } from 'playwright/test';

// types
import type { Locator } from '@playwright/test';

interface RowEntryTargetOptions {
    row: Locator;
    name: string;
};

/**
 * Asserts the number of Actions menu entries for each table row is correct and the expected actions are present.
 * @function expectTableActionsMenuEntries
 * @param {Locator} tableRows - The Playwright Locator for all of the table rows.
 * @param {(row: Locator) => (string | Promise<string>)} getRowDescription - A function that returns the description for a given table row, given the locator for the row.
 * @param {({ row, name }: RowEntryTargetOptions) => string[]} expectedEntries - A function that returns the list of expected action menu entries for the given row, or a static array of expected entries.
 * @returns {Promise<void>} - A promise that resolves when the assertion is complete.
 */
export const expectTableActionsMenuEntries = async (
    tableRows: Locator,
    // ESLint is confused about how function type declarations work.
    getRowDescription: (row: Locator) => (string | Promise<string>),
    expectedEntries: ({ row, name }: RowEntryTargetOptions) => (string[] | Promise<string[]>)
): Promise<void> => {
    await test.step('Test Actions menu entries of table', async () => {
        for (const row of await tableRows.all()) {
            const name = await getRowDescription(row);
            const expectedActionMenuEntries = await expectedEntries({ row, name });

            const actionDropdown = row.locator('.actionButton-cell .dropdown');
            const actionsButton = actionDropdown.getByRole('button', { name: `Actions for ${name}` });
            await expect(actionsButton, `Actions button is visible for row '${name}'`).toBeVisible();

            await actionsButton.click();
            const dropdownMenu = actionDropdown.locator('.dropdown-menu.show');
            await dropdownMenu.waitFor();
            await expect(dropdownMenu, `Row: ${name} - Clicking the Actions button displays the Actions dropdown menu`).toBeVisible();

            const menuItems = dropdownMenu.locator('li');
            await expect.soft(menuItems, `Row: ${name} - Actions menu contains expected number of items`).toHaveCount(expectedActionMenuEntries.length);
            await expect.soft(menuItems, `Row: ${name} - Actions menu contains the expected items`).toHaveText(expectedActionMenuEntries);

            // Close the Actions menu again
            await actionsButton.click();
            await dropdownMenu.waitFor({ state: 'detached' });
        }
    });
};
