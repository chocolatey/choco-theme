import { test, expect } from '@playwright/test';

// data
import { locatorsGlobal } from '@choco-playwright/data/locators';

// functions
import { toggleTheme } from '@choco-playwright/functions/toggle-theme';

/**
 * Test that the theme can be toggled from light to dark and vice versa.
 * @function toggleThemeColors
 * @param {string} userName - The username of the user performing the test.
 * @returns {Promise<void>} - A promise that resolves when the test is complete.
 */

export const toggleThemeColors = (userName: string): void => {
    test(`${userName} - Test theme can be toggled from light to dark`, async ({ page }) => {
        const { landmarks: { html } } = locatorsGlobal(page);

        await toggleTheme({
            page: page,
            mode: 'dark'
        });

        await expect(html).toHaveAttribute('data-bs-theme', 'dark');

        await toggleTheme({
            page: page,
            mode: 'light'
        });

        await expect(html).toHaveAttribute('data-bs-theme', 'light');
    });
};
