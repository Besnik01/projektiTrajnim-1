import { test, expect } from '@playwright/test';
import { helperlogin } from './helperlogin.ts/helperlogin';


 
test('Create pa URL / Content - error mesazhi', async ({ page }) => {
//Act
await helperlogin(page)
await page.getByText('QR Title').fill('Menu')
await page.getByText('Create / Save').click();
//Assert
await expect(page.getByText('NO QR codes found.')).toBeVisible();
});

