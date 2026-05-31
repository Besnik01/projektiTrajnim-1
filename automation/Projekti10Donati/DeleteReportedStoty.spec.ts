import { test, expect } from 'playwright/test'
import { openLoginForm2 } from './loginHelper10'

test ('should delete reported story with success', async ({ page }) => {
    
    //Act
    await openLoginForm2(page)
    await page.getByLabel('Headline').fill('Prishtina pret shi')
    await page.getByLabel('story content').fill('Moti sot nuk eshte premtues')
    await page.getByText('Publish Story').click()
    await page.getByText('Prishtina pret shi').click()
    await page.getByText('Report').nth(3).click()
    await page.getByText('Reported Stories').nth(0).click()
    await page.getByText('Delete').click()

    //Assert
    await expect(page.getByText('Story Deleted.')).toBeVisible()
})