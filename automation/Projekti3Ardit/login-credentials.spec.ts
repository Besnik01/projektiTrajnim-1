import { test, expect } from '@playwright/test';
import { Loginhelper } from '../Projekti3Ardit/helperLoginProjekti'

test('should login with valid credentials', async ({ page }) => {

  //Arrange
  const email ='manager@restaurantmenu.com';
  const password = 'Menu123';

  //Act
  await page.goto('http://localhost:5173');
  await page.getByText('Projekti 3').click();
  await page.getByLabel('Email').fill(email);
  await page.getByText('Password').nth(0).fill(password);
  await page.getByText('Login').nth(1).click();

  //Assert
  await expect(page.getByText('Logout').nth(0)).toBeVisible();
});

 