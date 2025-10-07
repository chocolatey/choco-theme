// types
import type { Page } from '@playwright/test';

// data
import { locatorsGlobal } from '@choco-playwright/data/locators';

// functions
import { waitForAnimations } from '@choco-playwright/functions/wait-for-animations';

export interface ToggleTheme {
    page: Page;
    mode: string;
}

/**
 * Toggles the theme of the specified page.
 * @function toggleTheme
 * @param {ToggleTheme} options - The options for toggling the theme.
 * @param {Page} options.page - The Playwright page instance.
 * @param {string} options.mode - The mode to toggle the theme to.
 * @returns {Promise<void>} - A promise that resolves after the theme is toggled.
 **/

export const toggleTheme = async ({
    page,
    mode
}: ToggleTheme): Promise<void> => {
    const { theme, landmarks: { html } } = locatorsGlobal(page);

    if (await theme.btnToggle.isVisible()) {
        const iconRemove = mode === 'light' ? 'fa-moon' : 'fa-sun';
        const iconAdd = mode === 'light' ? 'fa-sun' : 'fa-moon';

        await html.evaluate((node, [mode]) => {
            node.setAttribute('data-bs-theme', mode);
        }, [mode]);

        await theme.btnToggleIcon.evaluate((node, [iconRemove, iconAdd]) => {
            node.classList.remove(iconRemove);
            node.classList.add(iconAdd);
        }, [iconRemove, iconAdd]);

        // Wait for everything to be dark mode. Buttons in particular have a slow transition effect on them.
        // Without this not all buttons have transitioned over to dark mode colors.
        await waitForAnimations(page);
    }
};
