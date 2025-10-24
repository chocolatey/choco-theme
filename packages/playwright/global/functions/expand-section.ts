import { test } from '@playwright/test';

// types
import type { Locator } from '@playwright/test';

/**
 * Expands a section by checking a checkbox and waiting for the expanded section to become visible.
 * @function expandSection
 * @param {Locator} checkbox - The locator of the checkbox to check.
 * @param {Locator} expandedSection - The locator of the section that will be expanded.
 * @returns {Promise<void>} A Promise that resolves when the section is expanded.
 * @example
 * // Expand the section by checking the checkbox and waiting for the expanded section to become visible
 * await expandSection(await page.locator('.expand-checkbox'), await page.locator('.expanded-section'));
 */

export const expandSection = async (
    checkbox: Locator,
    expandedSection: Locator
): Promise<void> => {
    await test.step('Expand section', async () => {
        await checkbox.setChecked(true);

        await expandedSection.waitFor({ state: 'visible' });

        await new Promise(resolve => setTimeout(resolve, 3000));
    });
};
