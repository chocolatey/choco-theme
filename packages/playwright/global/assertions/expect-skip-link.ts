import { test, expect } from '@playwright/test';

// types
import type { Page } from '@playwright/test';

// data
import { locatorsGlobal } from '@choco-playwright/data/locators';

export interface ExpectSkipLink {
    page: Page;
    userName: string;
}

/**
 * Asserts that the skip link is accessible when tabbed to and that the main content is focused after activating the skip link.
 * @function expectSkipLink
 * @param {ExpectSkipLink} options - The options for the accessibility check.
 * @param {Page} options.page - The Playwright page instance.
 * @param {string} options.userName - The username of the specified user.
 * @returns {Promise<void>} - A promise that resolves after the accessibility check is complete.
 **/

export const expectSkipLink = async ({
    page,
    userName
}: ExpectSkipLink): Promise<void> => {
    await test.step(`${userName} - Skip link accessibility check`, async () => {
        const { landmarks: { skipLink } } = locatorsGlobal(page);

        await page.keyboard.press('Tab');

        await expect.soft(skipLink, 'The skip link should be visible when tabbed to.').toBeVisible();
        await expect.soft(skipLink, 'The skip link should be focused when tabbed to.').toBeFocused();

        // Activate the skip link
        await page.keyboard.press('Enter');

        // Verify that the main content is focused
        await expect.soft(page.locator('#mainContent'), 'The main content should be focused after activating the skip link.').toBeFocused();
    });
};
