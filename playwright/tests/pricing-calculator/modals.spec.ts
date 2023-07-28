import { test, expect } from '@playwright/test';

test('test-modals', async ({ page }) => {
    await page.goto('http://localhost:5080/');

    const perpetualModal = '#c4bModalPerpetualPricing';
    const nonProfitModal = '#c4bModalNonProfitPricing';
    const packagingModal = '#c4bModalPackaging';
    const responseTimesModal = '#c4bModalResponseTimes';
    const supportTypeModal = '#c4bModalSupportType';

    const testModal = async (locator: string, showContactLink: boolean) => {
        await page.click(`[data-bs-target="${locator}"]`);
        await expect(page.locator(locator)).toBeVisible();

        if (showContactLink) {
            await expect(page.locator(`${locator} .modal-footer a`)).toContainText('Contact Us');
        }

        await page.locator(`${locator} .modal-footer button[data-bs-dismiss="modal"]`).click();
        await expect(page.locator(locator)).toBeHidden();
    };

    await testModal(perpetualModal, true);
    await testModal(nonProfitModal, true);
    await testModal(packagingModal, false);
    await testModal(responseTimesModal, false);
    await testModal(supportTypeModal, false);
});
