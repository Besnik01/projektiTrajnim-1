import {test, expect } from "@playwright/test"
import { pro2, prostory2 } from "./helperLogin"

    test('Approving a story in repoort section', async ({page}) => {
        //Act
       await pro2(page)
       await prostory2(page)
       await page.getByText('Report').nth(3).click()
       await page.getByText('Reported Stories').click()
       await page.getByText('Storje').click()
       await page.getByText('Approve').nth(2).click()
        
    //Assert
        await expect(page.getByText('Reported story approved.')).toBeVisible();
    })