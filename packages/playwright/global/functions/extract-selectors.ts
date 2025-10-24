// types
import type { Locator } from '@playwright/test';

/**
 * Extracts all selectors from a locator function.
 * @function extractSelectors
 * @param {Locator} locator - The locator function to extract selectors from.
 * @returns {string} - The extracted selectors as a string.
 */

export const extractSelectors = (locator: Locator): string => {
    const regex = /locator\('([^']+)'\)/g;

    const locatorString = locator.toString();

    return [...locatorString.matchAll(regex)]
        .map(match => match[1]) // Extract the captured group (selector inside quotes)
        .join(' '); // Concatenate selectors with a space
};
