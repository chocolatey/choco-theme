import { expect, test } from '@playwright/test';

// types
import type { Page } from '@playwright/test';

/**
 * Asserts that the current URL of the page matches the expected URL.
 * @function expectUrl
 * @param {Page} page - The Playwright page object.
 * @param {url} url - A string representing the expected URL.
 * @returns {Promise<void>} - A promise that resolves when the assertion is complete.
 */

export const expectUrl = async (
    page: Page,
    url: string
): Promise<void> => {
    await test.step('Test the correct url is navigated to', async () => {
        const urlRegex = new RegExp(url.replaceAll('**', '.+'));

        await expect(page, 'Expect correct url is navigated to').toHaveURL(urlRegex);
    });
};
