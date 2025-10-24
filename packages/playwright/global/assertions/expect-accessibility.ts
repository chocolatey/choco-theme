import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { AxeResults } from 'axe-core';
import { createHtmlReport } from 'axe-html-reporter';

// types
import type { Page, Locator } from '@playwright/test';

// data
import { locatorsGlobal } from '@choco-playwright/data/locators';

// functions
import { extractSelectors } from '@choco-playwright/functions/extract-selectors';
import { removeFadeEffect } from '@choco-playwright/functions/remove-fade-effect';
import { toggleTheme } from '@choco-playwright/functions/toggle-theme';

export interface ExpectAccessibility {
    page: Page;
    browserName: string;
    userName: string;
    focusElement?: Locator | null;
    folderName: string;
    fileNamePrefix?: string | null;
    fileName: string;
}

/**
 * Asserts that the specified page has no automatically detectable WCAG A or AA violations or incomplete checks.
 * @function expectAccessibility
 * @param {ExpectAccessibility} options - The options for the accessibility check.
 * @param {Page} options.page - The Playwright page instance.
 * @param {string} options.browserName - The name of the browser being used.
 * @param {string} options.userName - The username of the specified user.
 * @param {Locator} [options.focusElement] - The element to focus on before running the accessibility check.
 * @param {string} options.folderName - The folder name for the accessibility report.
 * @param {string} [options.fileNamePrefix] - The prefix for the accessibility report file name.
 * @param {string} options.fileName - The file name for the accessibility report.
 * @returns {Promise<void>} - A promise that resolves after the accessibility check is complete.
 **/

export const expectAccessibility = async ({
    page,
    browserName,
    userName,
    focusElement = null,
    folderName,
    fileNamePrefix = null,
    fileName
}: ExpectAccessibility): Promise<void> => {
    await test.step(`${userName} for ${browserName} - ${fileName} at ${folderName} should have no automatically detectable WCAG A or AA violations or incomplete checks`, async () => {
        const { theme } = locatorsGlobal(page);

        const checkAccessibility = async (mode: string) => {
            const prefix = fileNamePrefix ? `${fileNamePrefix}-` : '';
            const globalWithTags = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'cat.semantics'];
            const globalDisableRules = ['landmark-unique', 'identical-links-same-purpose'];

            const axeBuilder = new AxeBuilder({ page })
                .withTags(globalWithTags)
                .disableRules(globalDisableRules);

            /*
                * Reason_1: Element's background color could not be determined because it partially overlaps other elements. This is a false positive.
                * Reason_2: The color here can't be determined due to a pseudo element. This is a false positive.
                * Reason_3: The color here can't be determined due to a background image. This is a false positive.
                * Reason_4: Improper heading levels are reported in the modal title, however this is valid since modals are checked as individual items and not in the page flow. This is a false positive.
                * Reason_5: The color here can't be determined due to the content being too short. This is a false positive.
            */

            // Elements where color contrast should be ignored
            const contrastExcludedSelectors = [
                '.active-parent.menu-item-parent.position-relative', // Reason_2
                '.callout strong', // Reason_2
                '.callout kbd', // Reason_2
                '.form-select', // Reason_3
                '.modal .callout-body', // Reason_1
                '#DeploymentStep_Script', // Reason_1
                '#assigned-role-count', // Reason_5
                '#PermissionsTabSelector', // Reason_1
                '#RolesTabSelector', // Reason_1
                '.permission-tree', // Reason_1,
                '#RolesTable .dt-column-title', // Reason_1
                '.dt-empty' // Reason_1
            ];

            // Elements where heading levels should be ignored
            const headingsExcludedSelectors = [
                '.modal-title', // Reason_4
                '.modal h6' // Can't determine previous heading since we are ignoring the modal title
            ];

            // First scan: Run on everything **except** contrast-excluded elements
            let mainAxeBuilder = axeBuilder;
            contrastExcludedSelectors.forEach(selector => {
                mainAxeBuilder = mainAxeBuilder.exclude(selector);
            });

            // First scan should also exclude heading-excluded elements
            headingsExcludedSelectors.forEach(selector => {
                mainAxeBuilder = mainAxeBuilder.exclude(selector);
            });

            if (focusElement) {
                await focusElement.waitFor();
                mainAxeBuilder = mainAxeBuilder.include(extractSelectors(focusElement));
            }

            const mainScanResults = await mainAxeBuilder.analyze();

            // Second scan: Run **only** on contrast-excluded elements, but disable `color-contrast`
            const contrastDisableRules = [...new Set([...globalDisableRules, 'color-contrast'])];

            let contrastAxeBuilder = new AxeBuilder({ page })
                .withTags(globalWithTags)
                .disableRules(contrastDisableRules);

            let contrastSelectorsFound = false;
            for (const selector of contrastExcludedSelectors) {
                if (await page.locator(selector).count() > 0) {
                    contrastAxeBuilder = contrastAxeBuilder.include(selector);
                    contrastSelectorsFound = true;
                }
            }

            let contrastScanResults: AxeResults = {} as AxeResults;
            if (contrastSelectorsFound) {
                contrastScanResults = await contrastAxeBuilder.analyze();
            }

            // Third scan: Run **only** on heading-excluded elements, but disable `heading-order`
            const headingsDisableRules = [...new Set([...globalDisableRules, 'heading-order'])];

            let headingsAxeBuilder = new AxeBuilder({ page })
                .withTags(globalWithTags)
                .disableRules(headingsDisableRules);

            let headingsSelectorsFound = false;
            for (const selector of headingsExcludedSelectors) {
                if (await page.locator(selector).count() > 0) {
                    headingsAxeBuilder = headingsAxeBuilder.include(selector);
                    headingsSelectorsFound = true;
                }
            }

            let headingsScanResults: AxeResults = {} as AxeResults;
            if (headingsSelectorsFound) {
                headingsScanResults = await headingsAxeBuilder.analyze();
            }

            // Merge results from all scans
            const scans = [mainScanResults, contrastScanResults, headingsScanResults].filter(Boolean);

            // Merge toolOptions.rules
            const mergedRules = scans.reduce((acc, scan) => {
                const rules = scan?.toolOptions?.rules;
                if (rules) {
                    Object.assign(acc, rules);
                }
                return acc;
            }, {});

            // Merge result arrays
            const accessibilityScanResults = {
                // Add any other top-level props from the last scan
                ...(scans.at(-1) || {}),

                // Take toolOptions from last scan, but overwrite its rules with the merged rules
                toolOptions: {
                    ...(scans.at(-1)?.toolOptions || {}),
                    rules: mergedRules
                },

                inapplicable: scans.flatMap(scan => scan.inapplicable || []),
                passes: scans.flatMap(scan => scan.passes || []),
                incomplete: scans.flatMap(scan => scan.incomplete || []),
                violations: scans.flatMap(scan => scan.violations || [])
            };

            if ((accessibilityScanResults.violations.length > 0 || accessibilityScanResults.incomplete.length > 0) || process.env.GENERATE_ACCESSIBILITY_REPORTS) {
                createHtmlReport({
                    results: accessibilityScanResults,
                    options: {
                        projectKey: 'Chocolatey Central Management',
                        outputDir: `test-results/accessibility-reports/${folderName}`,
                        reportFileName: `${prefix}${fileName}-${userName}-${browserName}-${mode}.html`
                    }
                });
            }

            expect.soft(accessibilityScanResults.violations, `${userName} for ${browserName} - ${fileName} in ${mode} mode at ${folderName} should have no WCAG violations`).toEqual([]);
            expect.soft(accessibilityScanResults.incomplete, `${userName} for ${browserName} - ${fileName} in ${mode} mode at ${folderName} should have no WCAG incomplete checks`).toEqual([]);
        };

        // Remove the .fade class from the dom to prevent false positives due to undetected transitions
        await removeFadeEffect(page);

        // Test in Light Mode
        await checkAccessibility('light');

        // Test in Dark Mode
        await toggleTheme({
            page: page,
            mode: 'dark'
        });

        // Some pages do not have a theme toggle button, such as the account area
        // These pages will not have a dark mode accessibility check
        if (await theme.btnToggle.isVisible()) {
            await checkAccessibility('dark');
        }

        await toggleTheme({
            page: page,
            mode: 'light'
        });
    });
};
