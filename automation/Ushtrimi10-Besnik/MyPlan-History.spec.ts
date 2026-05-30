import { test, expect } from '@playwright/test';
import {navigatetoOrbit9 } from './helper'

test('should login with valid credentials', async ({ page }) => {

  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Email').fill('instructor@cineplex.com');
  await page.getByText('Password').click();
  await page.keyboard.type('Cinema123');
  await page.getByText('Sign In').nth(1).click();

  //Assert
  await expect(page.getByText('My Plan').nth(0)).toBeVisible();
}); 

test('Go to my plan and see if its any movie without save movie', async ({ page }) => {
    
  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Email').fill('instructor@cineplex.com');
  await page.getByText('Password').click();
  await page.keyboard.type('Cinema123');
  await page.getByText('Sign In').nth(1).click();
  await page.getByText('My Plan').click();

  //Assert
  await expect(page.getByText('No movies selected yet. Go to Movies screen and save one.').nth(0)).toBeVisible();
}); 

test('Go to History and see if its any movie without save movie', async ({ page }) => {
    
  //Act
  await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Email').fill('instructor@cineplex.com');
  await page.getByText('Password').click();
  await page.keyboard.type('Cinema123');
  await page.getByText('Sign In').nth(1).click();
  await page.getByText('History').click();

  //Assert
  await expect(page.getByText('No completed orders yet. Finish an order from My Plan to see it here.').nth(0)).toBeVisible();
}); 

test('should save movie Orbit 9 and showed at my plan', async ({ page }) => {

  //Act
  await navigatetoOrbit9(page)


  //Assert
  await expect(page.getByText('Orbit 9').nth(0)).toBeVisible();
}); 

test('should save movie Orbit 9 and put filter City:Prishtine and Seat type:VIP', async ({ page }) => {

  //Act
  await navigatetoOrbit9(page)

  await page.getByLabel('City').selectOption('Prishtine');
  await page.getByLabel('Seat Type').selectOption('VIP');
  await page.getByText('Finish Order').click();
  await page.getByText('Confirm Order').click();


  //Assert
  await expect(page.getByText('Order completed successfully.').nth(0)).toBeVisible();
}); 

test('go to history and see if movie Orbit 9 is saved based on filter City:Prishtine and Seat type:VIP', async ({ page }) => {

  //Act
  await navigatetoOrbit9(page)

  await page.getByLabel('City').selectOption('Prishtine');
  await page.getByLabel('Seat Type').selectOption('VIP');
  await page.getByText('Finish Order').click();
  await page.getByText('Confirm Order').click();
  await page.getByText('History').click();

  

  //Assert
  await expect(page.getByText('City: Prishtine').nth(0)).toBeVisible();
  await expect(page.getByText('Seat Type: VIP').nth(0)).toBeVisible();
});
