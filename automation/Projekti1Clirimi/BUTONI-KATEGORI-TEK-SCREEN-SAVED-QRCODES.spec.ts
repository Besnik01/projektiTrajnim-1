import { test, expect } from '@playwright/test';
import { helperlogin } from './helperlogin.ts/helperlogin';


test('Butoni Kategori tek Screen SAVED QR CODES', async ({ page }) => {
//Act
await helperlogin(page)
await page.getByText('QR Title').fill('Menu')
await page.getByText('URL / Content').fill('Menu Restauranti');
await page.getByLabel('Category').selectOption('Events')
await page.getByText('Create / Save').click();
await page.getByText('QR Title').fill('Menu2')
await page.getByText('URL / Content').fill('Menu Restauranti2');
await page.getByLabel('Category').selectOption('Product')
await page.getByText('Create / Save').click();
await page.getByText('Saved QR Codes').click();
await page.getByRole('combobox').selectOption('Product');
//Assert
await expect(page.getByText('Menu2').nth(0)).toBeVisible();
});