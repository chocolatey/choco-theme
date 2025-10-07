import { test, expect } from '@playwright/test';

/**
 * Test that Playwright is up and running with desired configurations.
 * @function testBaseline
 * @returns {void} - Registers a Playwright test.
 */

export const testBaseline = (): void => {
    test('baseline', async ({ page }) => {
        await page.goto('./');
    
        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Chocolatey/);
    });
};
