import { test, expect } from '@playwright/test';
import { loginprojekt3 } from './loginProjekt3'

test('Duhet te behet login me kredenciale valide', async ({ page }) => {
  //Act
  await loginprojekt3(page)

  //Assert
  await expect(page.getByText('Create Menu Item').nth(0)).toBeVisible();
}); 