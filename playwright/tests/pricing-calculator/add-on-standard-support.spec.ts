import { test, expect } from '@playwright/test';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { c4bSupportNodes, c4bAddOnPrice } from './chocolatey-pricing-calculator'; // This is ignored since this is the correct location after it is imported into the repository by gulp
import { addOnContainer, communitySupportCheckboxBtn, numberInput, standardSupportCheckboxBtn } from './util';

test('test-add-on-standard-support', async ({ page }) => {
    await page.goto('http://localhost:5080/');

    const standardSupportPrice = c4bAddOnPrice[0].standardSupport;
    const addOnStandardSupport = '#c4bAddOnItemStandardSupport';

    await page.locator(numberInput).fill(c4bSupportNodes[0].community.toString());
    await page.locator(numberInput).press('Enter');

    await expect(page.locator(addOnContainer)).toBeHidden();
    await page.locator(standardSupportCheckboxBtn).click();
    await expect(page.locator(addOnContainer)).toBeVisible();

    await expect(page.locator(addOnStandardSupport)).toContainText('Standard Support');
    await expect(page.locator(addOnStandardSupport)).toContainText(standardSupportPrice.toLocaleString());

    await page.locator(communitySupportCheckboxBtn).click();
    await expect(page.locator(addOnContainer)).toBeHidden();
});
