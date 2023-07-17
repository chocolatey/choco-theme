import { test, expect } from '@playwright/test';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { c4bStandardSubscription, c4bPremiumSubscription, c4bAddOnPrice, C4bSubscription } from './chocolatey-pricing-calculator'; // This is ignored since this is the correct location after it is imported into the repository by gulp
import { numberInput, packageCounts, packagingSelect, premiumSupportCheckboxBtn, standardSupportCheckboxBtn } from './util';

test('test-price', async ({ page }) => {
    await page.goto('http://localhost:5080/');

    const priceNodeRange = '#c4bNodeRange';
    const price = '#c4bPrice';
    const standardNodeCounts = c4bStandardSubscription.map((item: { maxNodes: number; }) => item.maxNodes);
    const premiumNodeCounts = c4bPremiumSubscription.map((item: { maxNodes: number; }) => item.maxNodes);

    const testPrice = async (nodeCounts: number[], subscriptionLevel: C4bSubscription[] | C4bSubscription[]) => {
        for (const nodeCount of nodeCounts) {
            for (const level of subscriptionLevel) {
                if (nodeCount >= level.minNodes && nodeCount <= level.maxNodes) {
                    await page.locator(numberInput).fill(nodeCount.toString());
                    await page.locator(numberInput).press('Enter');

                    if (subscriptionLevel === c4bPremiumSubscription) {
                        await page.locator(premiumSupportCheckboxBtn).click();
                        await expect(page.locator(premiumSupportCheckboxBtn)).toBeChecked();
                    } else {
                        await page.locator(standardSupportCheckboxBtn).click();
                        await expect(page.locator(standardSupportCheckboxBtn)).toBeChecked();
                    }

                    // If the node count is 35, then the price is the base price plus the standard support add-on because we selected the standard support checkbox above
                    const basePrice = nodeCount === 35 ? level.pricePerNode + c4bAddOnPrice[0].standardSupport : level.pricePerNode * nodeCount;

                    await expect(page.locator(priceNodeRange)).toContainText(`${level.minNodes.toLocaleString()}-${level.maxNodes.toLocaleString()}`);
                    await expect(page.locator(price)).toContainText(basePrice.toLocaleString());

                    for (const packageCount of packageCounts) {
                        await page.locator(packagingSelect).selectOption(packageCount.toString());

                        if (packageCount) {
                            const packagePrice = c4bAddOnPrice[0].packaging * packageCount;
                            const basePlusPackagingPrice = basePrice + packagePrice;

                            await expect(page.locator(price)).toContainText(basePlusPackagingPrice.toLocaleString());
                        } else {
                            await expect(page.locator(price)).toContainText(basePrice.toLocaleString());
                        }
                    }

                    // Reset package select to 0
                    await page.locator(packagingSelect).selectOption('0');
                }
            }
        }
    };

    await testPrice(standardNodeCounts, c4bStandardSubscription);
    await testPrice(premiumNodeCounts, c4bPremiumSubscription);
});
