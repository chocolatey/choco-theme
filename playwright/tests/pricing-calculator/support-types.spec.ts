import { test, expect } from '@playwright/test';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { c4bSupportNodes } from './chocolatey-pricing-calculator'; // This is ignored since this is the correct location after it is imported into the repository by gulp
import { numberInput } from './util';

test('test-support-types', async ({ page }) => {
    await page.goto('http://localhost:5080/');

    const communitySupportCheckbox = '#c4bCommunitySupport';
    const standardSupportCheckbox = '#c4bStandardSupport';
    const premiumSupportCheckbox = '#c4bPremiumSupport';

    const assertCheckboxState = async (locator: string, isDisabled: boolean, isChecked: boolean) => {
        if (isDisabled) {
            await expect(page.locator(locator)).toBeDisabled();
        } else {
            await expect(page.locator(locator)).toBeEnabled();
        }

        if (isChecked) {
            await expect(page.locator(locator)).toBeChecked();
        }
    };

    const testSupportTypes = async (inputValue: number, communityIsDisabled: boolean, communityIsChecked: boolean, standardIsDisabled: boolean, standardIsChecked: boolean, premiumIsDisabled: boolean, premiumIsChecked: boolean) => {
        await page.locator(numberInput).fill(inputValue.toString());
        await page.locator(numberInput).press('Enter');

        // Ensures the slider value and input value are the same
        await expect(page.locator('.noUi-tooltip')).toContainText(inputValue.toString());

        await assertCheckboxState(communitySupportCheckbox, communityIsDisabled, communityIsChecked);
        await assertCheckboxState(standardSupportCheckbox, standardIsDisabled, standardIsChecked);
        await assertCheckboxState(premiumSupportCheckbox, premiumIsDisabled, premiumIsChecked);
    };

    await testSupportTypes(c4bSupportNodes[0].community, false, true, false, false, true, false);
    await testSupportTypes(c4bSupportNodes[0].standard, true, false, false, true, true, false);
    await testSupportTypes(c4bSupportNodes[0].premium, true, false, false, true, false, false);
});
