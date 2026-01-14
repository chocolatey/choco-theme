import * as path from 'path';

/**
 * Get's the resolved path to the results output directory.
 * @function getResultsPath
 * @returns {string} The resolved path to the results output directory.
 */

export const getResultsPath = (): string => {
    if (!!process.env.PLAYWRIGHT_JUNIT_OUTPUT_NAME) {
        return path.resolve(path.dirname(process.env.PLAYWRIGHT_JUNIT_OUTPUT_NAME));
    }

    // Since we haven't told it explicitly what file to use, the directory is expected to be up two levels.
    return path.resolve(__dirname, '../../../test-results');
};
