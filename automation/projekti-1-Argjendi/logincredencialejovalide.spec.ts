import { test, expect } from '@playwright/test';

test('login pa email dhe pa password', async ({ page }) => {
//Act
await page.goto('https://qa-trajnim.netlify.app/');
await page.getByText('Projekti 1').click();
await page.getByText('Login').nth(1).click();

//Assert
await expect(page.getByText('Email is required.').nth(0)).toBeVisible()
await expect(page.getByText('Password is required.').nth(0)).toBeVisible()
});

test('login me email pa password', async ({ page }) => {
//Act
await page.goto('https://qa-trajnim.netlify.app/');
await page.getByText('Projekti 1').click();
await page.getByText('Email').nth(0).fill('student@projekti1.com');
await page.getByText('Login').nth(1).click();

//Assert
await expect(page.getByText('Password is required.').nth(0)).toBeVisible()
});