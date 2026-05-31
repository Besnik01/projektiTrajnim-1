import { test, expect } from '@playwright/test';
import { Loginhelper } from './helperLoginProjekti';

//POSITIVE SCENARIOUS

test('Create Menu Item', async ({ page }) => {
  //Act
  await Loginhelper(page) 
  await page.getByText('Create Menu Item').nth(0).click();
  await page.locator('select').selectOption({ label: 'Mëngjes' });
  await page.getByPlaceholder('Double Smash Burger').fill('Cheese Burger');
  await page.locator('textarea').fill('Beef, cheese and sauce');
  await page.locator('input[type="number"]') .fill('8.50');
  await page.getByRole('button', { name: 'Save Item' }).click();

  //Assert
  await expect(page.getByText('Save Item')).toBeVisible();
});

 test('select Sallata category', async ({ page }) => {
  //Arrange
  const menu = 'Sallata'

  //Act
  await Loginhelper(page) 
  await page.getByText('Create Menu Item').nth(0).click();
  await page.locator('select').selectOption({ label: menu });
  await page.getByPlaceholder('Double Smash Burger').fill(menu);
  await page.locator('textarea').fill('Sushi sallata');
  await page.locator('input[type="number"]') .fill('4.50');
  await page.getByRole('button', { name: 'Save Item' }).click();

  //Assert
  await expect(page.getByText('Save Item')).toBeVisible();
});

 test('select Hamburger category', async ({ page }) => {
  //Act
  await Loginhelper(page) 
  await page.getByText('Create Menu Item').nth(0).click();
  await page.locator('select').selectOption({ label: 'Hamburger' });
  await page.getByPlaceholder('Double Smash Burger').fill('Hamburger');
  await page.locator('textarea').fill('chese burger');
  await page.locator('input[type="number"]') .fill('7.00');
  await page.getByRole('button', { name: 'Save Item' }).click();

  //Assert
  await expect(page.getByText('Save Item')).toBeVisible();
});

 test('Select samun category', async ({ page }) => {
  //Act
  await Loginhelper(page) 
  await page.getByText('Create Menu Item').nth(0).click();
  await page.locator('select').selectOption({ label: 'Samun' });
  await page.getByPlaceholder('Double Smash Burger').fill('Samun');
  await page.locator('textarea').fill('ME SUXHUK');
  await page.locator('input[type="number"]') .fill('2.00');
  await page.getByRole('button', { name: 'Save Item' }).click();

  //Assert
  await expect(page.getByText('Save Item')).toBeVisible();
});


 ///NEGATIVE SCENARIOUS 

test('User order without description', async ({ page }) => {
  //Arrange
  const menu = 'Hamburger'

  //Act
  await Loginhelper(page) 
  await page.getByText('Create Menu Item').nth(0).click();
  await page.locator('select').selectOption({ label: menu });
  await page.getByPlaceholder('Double Smash Burger').fill(menu);
  await page.locator('textarea').fill('');
  await page.locator('input[type="number"]') .fill('7.00');
  await page.getByRole('button', { name: 'Save Item' }).click();

  //Assert
  await expect(page.getByText('Description is required.')).toBeVisible();
});

 test('User order without item name', async ({ page }) => {
  //Act
  await Loginhelper(page) 
  await page.getByText('Create Menu Item').nth(0).click();
  await page.locator('select').selectOption({ label: 'Hamburger' });
  await page.getByPlaceholder('Double Smash Burger').fill('');
  await page.locator('textarea').fill('chese');
  await page.locator('input[type="number"]') .fill('7.00');
  await page.getByRole('button', { name: 'Save Item' }).click();

  //Assert
  await expect(page.getByText('Item name is required.')).toBeVisible();
});


 test('User order without price', async ({ page }) => {
  //Arrange
  const menu = 'Hamburger'

  //Act
  await Loginhelper(page) 
  await page.getByText('Create Menu Item').nth(0).click();
  await page.locator('select').selectOption({ label: menu });
  await page.getByPlaceholder('Double Smash Burger').fill( menu );
  await page.locator('textarea').fill('chese');
  await page.locator('input[type="number"]') .fill('');
  await page.getByRole('button', { name: 'Save Item' }).click();

  //Assert
  await expect(page.getByText('Price must be a positive number.')).toBeVisible();
});

test('Reset form after entering data', async ({ page }) => {
  // Act
  await Loginhelper(page)  
  await page.locator('select').selectOption({ label: 'Pizza' });
  await page.getByPlaceholder('Double Smash Burger').fill('Pepperoni Pizza');
  await page.locator('textarea').fill('Pizza with pepperoni and cheese');
  await page.locator('input[type="number"]').fill('9.90');
  await page.getByRole('button', { name: 'Reset' }).click();

  // Assert
  await expect(page.getByText('Pepperoni Pizza')).not.toBeVisible();
});