import {test, expect } from "@playwright/test"
import { pro2, prostory2 } from "./helperLogin"

test('Create a story with sport option', async ({page}) => {
    //Act
    await pro2(page)
    await prostory2(page)
        
    //Assert
    await expect(page.getByText('Category: Sport')).toBeVisible();
})