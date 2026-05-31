import {test, expect } from "@playwright/test"

test('Login with wrong credicionals', async ({page}) => {
        //Act
        await page.goto('http://localhost:5173/')
        await page.getByText('Projekti 2').click()
        await page.getByLabel('Email').fill('editsr@newsdesk.com')
        await page.getByLabel('password').nth(0).fill('News123')
        await page.getByText('Login').nth(1).click()
        
        //Assert
         await expect(page.getByText('Invalid credentials.')).toBeVisible();
})