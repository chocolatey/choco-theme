import { expect, test } from '@playwright/test';

// types
import type { Locator } from '@playwright/test';
import type { PathCards } from '@choco-playwright/data/types';

/**
 * Asserts the number of cards on the page as well as their names and contents.
 * @function expectCards
 * @param {Locator} container - The container element for the cards.
 * @param {PathCards[]} cardsExpected - An array of expected card information.
 * @returns {Promise<void>} - A promise that resolves when the assertion is complete.
 */

export const expectCards = async (
    container: Locator,
    cardsExpected: PathCards[]
): Promise<void> => {
    await test.step('Test number of cards, their names, and contents', async () => {
        await expect.soft(container, 'Card container element is visible').toBeVisible();

        const cards = await container.locator('.card').all();

        expect.soft(cards.length, 'Number of cards is correct').toEqual(cardsExpected.length);

        for (const [index, { name, content }] of cardsExpected.entries()) {
            const actualCard = cards[index];

            await expect.soft(actualCard.locator('.h6').filter({ hasText: name }), 'Card name is correct').toBeVisible();
            await expect.soft(actualCard.locator('.h4'), 'Card value matches the expected string or pattern').toHaveText(content);
        }
    });
};
