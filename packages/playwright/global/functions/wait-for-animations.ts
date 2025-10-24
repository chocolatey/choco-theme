// types
import type { Page } from '@playwright/test';

/**
 * Waits for all animations to finish including CSS transitions and keyframes.
 * @function waitForAnimations
 * @param {Page} page - The Playwright page instance.
 * @returns {Promise<void>}
 */

export const waitForAnimations = async (page: Page): Promise<void> => {
    await page.evaluate(async () => {
        const html = document.querySelector('html');

        if (!html) {
            throw new Error('HTML element not found');
        }

        await Promise.all(
            html.getAnimations({ subtree: true }).map(animation => animation.finished)
        );
    });
};
