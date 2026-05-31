import { test, expect } from '@playwright/test';
import { loginHelperProjekti1 } from './helperProjekti1';

test('krijimi i qr code', async ({ page }) => {
//Act
await loginHelperProjekti1(page)
await page.getByText('Logout').click();


//Assert
await expect(page.getByText('Sign In To Project 1').nth(0)).toBeVisible()
});