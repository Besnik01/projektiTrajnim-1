import { test, expect } from '@playwright/test';
import { openloginForm } from './HelperFile/loginHepler';

test('should login with valid credentials / duhet te kycet me kredenciale valide', async ({ page }) => {
  //Act
  await openloginForm(page)
    await page.getByText('Sign In').nth(1).click();

  //Assert
    await expect(page.getByText('Logout')).toBeVisible();
});