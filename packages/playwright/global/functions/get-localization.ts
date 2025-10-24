/**
 * Gets the localized string with replacements applied.
 * @function getLocalization
 * @param {string} localizationString - The localization string with placeholders.
 * @param {...string} replacements - The replacement values for the placeholders.
 * @returns {Promise<string>} A Promise that resolves with the localized string with replacements.
 * @example
 * // Get the localized string with replacements applied
 * const localizedString = await getLocalization('Captain, {0} is requesting permission to beam down to {1}!', 'Riker', 'the planet surface');
 * console.log(localizedString); // Output: 'Captain, Riker is requesting permission to beam down to the planet surface!'
 */

export const getLocalization = async (
    localizationString: string,
    ...replacements: string[]
): Promise<string> => {
    return localizationString.replace(/{(\d+)}/g, (match: string, index: string) => {
        const replacementIndex: number = parseInt(index, 10);

        if (replacementIndex >= 0 && replacementIndex < replacements.length) {
            return replacements[replacementIndex];
        }

        return match; // If no replacement found, return the original placeholder
    });
};
