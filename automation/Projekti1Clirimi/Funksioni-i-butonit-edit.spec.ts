import { test, expect } from '@playwright/test';
import { helperlogin } from './helperlogin.ts/helperlogin';

test('Funksioni i butonit Remove', async ({ page }) => {
//Act
await helperlogin(page)
await page.getByText('QR Title').fill('Menu');
await page.getByText('URL / Content').fill('Menu Restauranti');
await page.getByLabel('Category').selectOption('Events');
await page.getByText('Create / Save').click();
await page.getByText('Edit').nth(1).click();


//Assert
await expect(page.getByText('Save Changes')).toBeVisible();
});
