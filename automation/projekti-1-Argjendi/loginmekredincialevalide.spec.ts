import { test, expect } from '@playwright/test';

test('Login me kredenciale valide', async ({ page }) => {
//Act
await page.goto('https://qa-trajnim.netlify.app/');
await page.getByText('Projekti 1').click();
await page.getByText('Email').nth(0).fill('student@projekti1.com');
await page.getByLabel('Password').nth(0).fill('Projekti123');
await page.getByText('Login').nth(1).click();

//Assert
await expect(page.getByText('QA QR Studio')).toBeVisible()

});

test('funksioni Back To Main Login', async ({ page }) => {
//Act
await page.goto('https://qa-trajnim.netlify.app/');
await page.getByText('Projekti 1').click();
await page.getByText('Back To Main Login').click();

await expect(page.getByText('Projekti 1')).toBeVisible()

})

