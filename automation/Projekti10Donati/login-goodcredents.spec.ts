import { test, expect } from 'playwright/test'
test('should log in with valid credentials', async ({ page }) => {

//Arrange
const url = 'http://localhost:5173/'
const credentials = {
    email:"editor@newsdesk.com",
    password:"News123"
}

//Act
await page.goto(url)
await page.getByText('projekti 2').click()
await page.getByLabel('Email').fill(credentials.email)
await page.getByLabel('Password').fill(credentials.password)
await page.getByText('Login').nth(1).click()

//Assert
await expect (page.getByText('Logout')).toBeVisible()
})