// types
import type { Page } from '@playwright/test';

/**
 * Removes the .fade class from the dom to prevent false positives due to undetected transitions
 * @function removeFadeEffect
 * @param {Page} page - The Playwright page instance.
 * @returns {Promise<void>}
 */

export const removeFadeEffect = async (page: Page): Promise<void> => {
    await page.evaluate(() => {
        const fadeElements = document.querySelectorAll('.fade');
        fadeElements.forEach(element => element.classList.remove('fade'));
    });
};
