import { test, expect } from '@playwright/test';
import { loginprojekt3 } from './loginProjekt3'
import { krijimiiporosise } from './Krijimiiporosise';

test('Duhet te realizohet porosia me sukses dhe te shfaqet te meny', async ({ page }) => {
  //Act
  await loginprojekt3(page)
  await krijimiiporosise(page)

  //Assert
  await expect(page.getByText('Classic Burger').nth(0)).toBeVisible();
}); 