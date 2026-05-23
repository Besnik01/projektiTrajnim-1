import { test, expect } from '@playwright/test';
import { openLoginform } from './HELPER FILES/loginhelper';

test('should login with valid credentials / duhet te kycet me kredenciale valide', async ({ page }) => {
//Act
  await openLoginform (page)

  //Assert
  await expect(page.getByText('Home').nth(0)).toBeVisible();
});