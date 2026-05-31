import { test, expect } from '@playwright/test';
import { helperlogin } from './helperlogin.ts/helperlogin';

test('Funksioni i filterit te kategorive', async ({ page }) => {
//Act
await helperlogin(page)
await page.getByText('QR Title').fill('Menu')
await page.getByText('URL / Content').fill('Menu Restauranti');
await page.getByLabel('Category').selectOption('Events')
await page.getByText('Create / Save').click();

//Assert
await expect(page.getByText('Events').nth(1)).toBeVisible();
});