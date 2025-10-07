import { expect } from '@playwright/test';

// types
import type { Page } from '@playwright/test';

// data
import { locatorsGlobal } from '@choco-playwright/data/locators';

/**
 * Options for expecting a Toast notification.
 * @interface ExpectToastOptions
 * @property {Page} page - The Playwright page instance.
 * @property {RegExp} expectedText - The regular expression to ensure the toast matches
 */

interface ExpectToastOptions {
    page: Page;
    expectedText: RegExp;
}

/**
 * Asserts the toast notification is displayed with the expected text.
 * @function expectToast
 * @param {ExpectToastOptions} options - The options for the assertion
 * @param {Page} options.page - The Playwright page instance.
 * @param {RegExp} options.expectedText - The expected text to be displayed in the toast notification.
 * @returns {Promise<void>} A promise that resolves when the assertion is complete.
 */

export const expectToast = async ({
    page,
    expectedText
}: ExpectToastOptions): Promise<void> => {
    const { components: { toastContainer } } = locatorsGlobal(page);
    const toastNotification = toastContainer.getByRole('alert');
    await toastNotification.waitFor({ state: 'attached' });

    const toastText = await toastNotification.textContent();
    const toastTextTrimmed = toastText?.trim() || '';

    expect.soft(toastTextTrimmed, 'Displays a toast notification.').toMatch(expectedText);

    await toastNotification.waitFor({ state: 'detached' });
};
