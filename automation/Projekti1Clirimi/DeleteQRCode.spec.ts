import { test, expect } from '@playwright/test';
import { helperlogin } from './helperlogin.ts/helperlogin';

test('Delete created QR CODE', async ({ page }) => {
//Act
await helperlogin(page)
await page.getByText('QR Title').fill('Menu')
await page.getByText('URL / Content').fill('Menu Restauranti');
await page.getByText('Create / Save').click();
await page.getByText('Delete').nth(1).click();
//Assert
await expect(page.getByText('NO QR codes found.')).toBeVisible();
});

