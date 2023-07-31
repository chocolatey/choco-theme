import { test, expect } from '@playwright/test';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { c4bIncludedItems } from './chocolatey-pricing-calculator'; // This is ignored since this is the correct location after it is imported into the repository by gulp
import { addOnContainer, numberInput, premiumSupportCheckboxBtn } from './util';

test('test-included-items', async ({ page }) => {
    await page.goto('http://localhost:5080/');

    const nodeCounts = [35, 100, 500, 1500, 50000];
    const itemSupportType = '#c4bIncludedSupportType';
    const itemIntroCallAndDemo = '#c4bIncludedIntroCallAndDemo';
    const itemCasesPerMonth = '#c4bIncludedCasesPerMonth';
    const itemTechnicalContacts = '#c4bIncludedTechnicalContacts';
    const itemSupport24x7 = '#c4bIncludedSupport24x7';
    const itemResponseTimes = '#c4bIncludedResponseTimes';
    const itemResponseTimesP1 = '#c4bIncludedResponseTimesP1';
    const itemResponseTimesP2 = '#c4bIncludedResponseTimesP2';
    const itemResponseTimesP3 = '#c4bIncludedResponseTimesP3';
    const nodeCallout = '#c4b50kNodes';
    const includedNodeRange = '#c4bIncludedNodeRange';

    for (const nodeCount of nodeCounts) {
        for (let level of c4bIncludedItems) {
            // Use 300 - 50,000 node range
            if (nodeCount === 500 || nodeCount === 1500) {
                level = c4bIncludedItems[2];
            }

            // Use 1,500 - 50,000 node range
            if (nodeCount === 50000) {
                level = c4bIncludedItems[3];

                await page.locator(premiumSupportCheckboxBtn).click();
                await expect(page.locator(premiumSupportCheckboxBtn)).toBeChecked();
            }

            if (nodeCount >= level.minNodes && nodeCount <= level.maxNodes) {
                await page.locator(numberInput).fill(nodeCount.toString());
                await page.locator(numberInput).press('Enter');

                const showHideIncludedItems = async (item: string, levelItem: boolean | number) => {
                    if (levelItem) {
                        await expect(page.locator(item)).toBeVisible();
                    } else {
                        await expect(page.locator(item)).toBeHidden();
                    }
                };

                await showHideIncludedItems(itemIntroCallAndDemo, level.introCallAndDemo);
                await showHideIncludedItems(itemSupport24x7, level.support24x7);
                await showHideIncludedItems(itemCasesPerMonth, level.casesPerMonth);
                await showHideIncludedItems(itemTechnicalContacts, level.technicalContacts);
                await showHideIncludedItems(itemResponseTimes, level.responseTimes?.p1);

                if (nodeCount === 50000) {
                    await expect(page.locator(itemSupportType)).toContainText('Premium Support');
                    await expect(page.locator(nodeCallout)).toBeVisible();
                } else {
                    await expect(page.locator(itemSupportType)).toContainText(level.standardSupport ? 'Standard Support' : 'Community Support -');
                    await expect(page.locator(nodeCallout)).toBeHidden();
                }

                if (level.responseTimes) {
                    await expect(page.locator(itemResponseTimesP1)).toContainText(level.responseTimes.p1.toString());
                    await expect(page.locator(itemResponseTimesP2)).toContainText(level.responseTimes.p2.toString());
                    await expect(page.locator(itemResponseTimesP3)).toContainText(level.responseTimes.p3.toString());
                }

                // Check that node ranges are correct
                await expect(page.locator(includedNodeRange)).toContainText(`${level.minNodes.toLocaleString()}-${level.maxNodes.toLocaleString()}`);

                // Ensure Add On Container is still hidden
                await expect(page.locator(addOnContainer)).toBeHidden();
            }
        }
    }
});
