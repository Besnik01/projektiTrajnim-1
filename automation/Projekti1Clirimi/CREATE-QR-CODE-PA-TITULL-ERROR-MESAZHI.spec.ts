import { test, expect } from '@playwright/test';
import { helperlogin } from './helperlogin.ts/helperlogin';

 
test('Creat QR Code pa Titull - erro mesazhi', async ({ page }) => {
//Act
await helperlogin(page)
await page.getByText('URL / Content').fill('Menu Restauranti');
await page.getByText('Create / Save').click();
//Assert
await expect(page.getByText('QR title is required.')).toBeVisible();
});

