import { test } from '@playwright/test';

// functions
import { waitForTables } from '@choco-playwright/functions/wait-for-tables';

// assertions
import { expectSkipLink } from '@choco-playwright/assertions/expect-skip-link';

export interface TestSkipLink {
    userName: string;
}

/**
 * Test the skip link functionality of a page.
 * @function testSkipLink
 * @param {TestSkipLink} options - The options for the skip link test.
 * @param {string} options.userName - The username of the specified user.
 * @returns {void} - Registers a Playwright test.
 */

export const testSkipLink = ({
    userName = 'Default User'
}: TestSkipLink): void => {
    test(`${userName} - Test skip link`, { tag: '@accessibility' }, async ({ page }) => {
        // Reload the page to ensure tab order is reset
        await page.reload();
        await waitForTables(page);

        await expectSkipLink({
            page,
            userName
        });
    });
};
