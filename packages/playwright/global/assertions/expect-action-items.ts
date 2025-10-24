import { expect, test } from '@playwright/test';

// types
import type { Page } from '@playwright/test';

// data
import { locatorsGlobal } from '@choco-playwright/data/locators';

export interface ActionItems {
    links: string[];
    buttons: string[];
}

export const expectActionItem = async (
    page: Page,
    type: 'link' | 'button',
    text: string
): Promise<void> => {
    const { components: { btnAction, btnActionDropdown } } = locatorsGlobal(page);

    await expect.soft(btnActionDropdown.getByRole(type, { name: text }), `${text} menu entry should not be visible initially`).toBeHidden();
    await btnAction.click();
    await expect.soft(btnActionDropdown.getByRole(type, { name: text }), `${text} menu entry should be visible after clicking actions`).toBeVisible();
    await btnAction.click();
};
/**
 * Asserts the action options for the page
 * @function expectActionOptions
 * @param {Page} page - The Playwright page object.
 * @param {ActionItems} options - The options to validate
 * @returns {Promise<void>} - A promise that resolves when the assertion is complete.
 */

export const expectActionItems = async (
    page: Page,
    options: ActionItems
): Promise<void> => {
    await test.step('verify action menu items', async () => {
        for (const button of options.buttons) {
            await expectActionItem(page, 'button', button);
        }

        for (const link of options.links) {
            await expectActionItem(page, 'link', link);
        }
    });
};
