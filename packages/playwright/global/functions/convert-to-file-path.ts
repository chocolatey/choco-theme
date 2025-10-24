// types
import type { Locator } from '@playwright/test';

/**
 * Converts the text content of the provided locator into a file path-friendly format.
 * @function convertToFilePath
 * @param {Locator} focusElement - The locator of the element containing the text content to convert.
 * @returns {Promise<string>} A Promise that resolves to the converted file path.
 * @example
 * // Convert the text content of the element with class 'file-name' to a file path
 * const filePath = await convertToFilePath(page.locator('.file-name'));
 * console.log(filePath); // Output: 'example-file-path'
 */

export const convertToFilePath = async (focusElement: Locator): Promise<string> => {
    const buttonText = await focusElement.textContent();

    if (!buttonText) {
        return '';
    }

    return buttonText.trim().replace(/\s+/g, '-').toLowerCase();
};
