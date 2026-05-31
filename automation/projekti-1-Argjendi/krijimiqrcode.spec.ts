import { test, expect } from '@playwright/test';
import { loginHelperProjekti1 } from './helperProjekti1';
import { QRcode } from './krijimiQRcode';

test('krijimi i qr code', async ({ page }) => {
    //Act
    await loginHelperProjekti1(page)
    await QRcode(page)

    //Assert
    await expect(page.getByText('trajnimi').nth(0)).toBeVisible()
});

test('save qr codi shfaqet tek SavedQRCodes', async ({ page }) => {
    //Act
    await loginHelperProjekti1(page)
    await QRcode(page)

    //Assert
    await expect(page.getByText('trajnimi').nth(0)).toBeVisible()
});

test('Remove qr codin nga lista', async ({ page }) => {
    //Act
    await loginHelperProjekti1(page)
    await QRcode(page)

    //Assert
    await expect(page.getByText('trajnimi').nth(0)).toBeVisible()
});