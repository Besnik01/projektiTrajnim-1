import {test, expect } from "@playwright/test"
import { pro2, prostory2 } from "./helperLogin"


    test('Delete a story in new desk', async ({page}) => {
    //Act
    await pro2(page)
    await prostory2(page)
    await page.getByText('Storje').click()
    await page.getByText('Delete').click()
 
    //Assert
    await expect(page.getByText('Storje')).not.toBeVisible();
    })