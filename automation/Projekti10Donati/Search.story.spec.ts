import { test, expect } from 'playwright/test'
import { openLoginForm2 } from './loginHelper10'

test ('should search story with success', async ({ page }) => { 

    //Act
    await openLoginForm2(page)
    await page.getByLabel('Headline').fill('Prishtina pret shi')
    await page.getByLabel('story content').fill('Moti sot nuk eshte premtues')
    await page.getByText('Publish Story').click()
    await page.getByLabel('Headline').fill('Prishtina pret diell')
    await page.getByLabel('story content').fill('Moti sot eshte premtues')
    await page.getByText('Publish Story').click()
    await page.getByPlaceholder('Search headline/content').fill('diell')


    //Assert
    await expect(page.getByText('Prishtina pret diell')).toBeVisible()
})