import { test, expect } from '@playwright/test';
import { helperlogin } from './helperlogin.ts/helperlogin';

test('Funksioni i butonit Search', async ({ page }) => {
//Act
await helperlogin(page)
await page.getByText('QR Title').fill('Menu');
await page.getByText('URL / Content').fill('Menu Restauranti');
await page.getByLabel('Category').selectOption('Events');
await page.getByText('Create / Save').click();
await page.getByText('QR Title').fill('Menu2');
await page.getByText('URL / Content').fill('Menu Restauranti 2');
await page.getByText('Create / Save').click();
await page.getByPlaceholder('Search title, content, category').fill('Menu2')

//Assert
await expect(page.getByText('Menu2')).toBeVisible();
});
