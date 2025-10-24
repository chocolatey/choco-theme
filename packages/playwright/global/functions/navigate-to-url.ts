import { expect, test } from '@playwright/test';

// types
import type { Page } from '@playwright/test';

// functions
import { waitForTables } from '@choco-playwright/functions/wait-for-tables';

/**
 * Options for navigating to a URL.
 * @interface NavigateToUrlOptions
 * @property {Page} page - The Playwright page instance.
 * @property {string} url - The URL to navigate to.
 */

export interface NavigateToUrlOptions {
    page: Page;
    url: string;
}

/**
 * Navigates to a specified URL.
 * @function navigateToUrl
 * @param {NavigateToUrlOptions} options - The options object.
 * @returns {Promise<void>} - A promise that resolves when the navigation is complete.
 * @example
 * // Navigate to the URL
 * await navigateToUrl({
 *    page,
 *    url: paths.computers.url
 * });
 */

export const navigateToUrl = async ({
    page,
    url
}: NavigateToUrlOptions): Promise<void> => {
    await test.step(`Navigate to url '${url}'`, async () => {
        await page.goto(url);
        await page.waitForURL(url, { waitUntil: 'domcontentloaded' });
        await expect(page).toHaveURL(url);
        await waitForTables(page);
    });
};
