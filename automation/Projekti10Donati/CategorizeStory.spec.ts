import { test, expect } from 'playwright/test'
import { openLoginForm2 } from './loginHelper10'

test ('should categorize story with success', async ({ page }) => {
//Act
await openLoginForm2(page)
await page.getByLabel('Headline').fill('Metallica ne SunnyHill')
await page.getByLabel('story content').fill('Rok-Grupi i famshem do te performoje ne Prishtine')
await page.getByLabel('Category').selectOption('Music')
await page.getByText('Publish Story').click()

//Assert

await expect(page.getByText('Category: Music')).toBeVisible()

})