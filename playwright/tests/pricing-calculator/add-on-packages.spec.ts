import { test, expect } from '@playwright/test';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { c4bAddOnPrice } from 'choco-theme/js/src/ts/util/pricing-calculator'; // This is ignored since this is the correct location after it is imported into the repository by gulp
import { addOnContainer, packageCounts, packagingSelect } from './util';

test('test-add-on-packaging', async ({ page }) => {
    await page.goto('./');

    const addOnPackaging = '#c4bAddOnItemPackaging';

    for (const packageCount of packageCounts) {
        await page.locator(packagingSelect).selectOption(packageCount.toString());

        if (packageCount) {
            const packagePrice = c4bAddOnPrice[0].packaging * packageCount;

            await expect(page.locator(addOnContainer)).toBeVisible();
            await expect(page.locator(addOnPackaging)).toContainText(packagePrice.toLocaleString());
            await expect(page.locator(addOnPackaging)).toContainText(`${packageCount} Custom Packaging`);
        } else {
            await expect(page.locator(addOnContainer)).toBeHidden();
        }
    }
});
