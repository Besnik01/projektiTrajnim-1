import { test, expect } from 'playwright/test'
import { openLoginForm2 } from './loginHelper10'

test ('should publish story with success', async ({ page }) => {
//Act
await openLoginForm2(page)
await page.getByLabel('Headline').fill('Prishtina pret shi')
await page.getByLabel('story content').fill('Moti sot nuk eshte premtues')
await page.getByText('Publish Story').click()

//Assert
await expect(page.getByText('Prishtina pret shi')).toBeVisible() 
})
