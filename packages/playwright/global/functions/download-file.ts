import { getResultsPath } from '@choco-playwright/functions/get-results-path';
import type { Page } from '@playwright/test';
import * as path from 'path';

/**
 * Download a file from the current page.
 * @function downloadFile
 * @param page The Playwright page instance.
 * @param downloadAction The action to take to initiate the download.
 * @param fileName The name to give the downloaded file.
 * @returns The path to the file that has been downloaded.
 */
export const downloadFile = async (
    page: Page,
    downloadAction: (page: Page) => Promise<void>,
    fileName: string,
    downloadTimeout = 30000
) => {
    const directory = getResultsPath();

    const destinationPath = path.resolve(directory, 'playwright-downloads', fileName);
    // Wait up to 2 minutes for the download to occur.
    const downloadPromise = page.waitForEvent('download', { timeout: downloadTimeout });
    await downloadAction(page);
    const download = await downloadPromise;
    await download.saveAs(destinationPath);
    return destinationPath;
};