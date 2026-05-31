import {test, expect } from "@playwright/test"
import { pro2, prostory2 } from "./helperLogin"

    test('Searching a story in report section', async ({page}) => {
        //Act
        await pro2(page)
        await prostory2(page)
        await page.getByText('Report').nth(3).click()
        await page.getByText('Reported Stories').click() 
        await page.getByPlaceholder('Search reported stories').fill('Storje')

        //Assert
         await expect(page.getByText('Stroje2')).toBeVisible();
    })