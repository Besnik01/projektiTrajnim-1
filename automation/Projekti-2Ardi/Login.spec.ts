import {test, expect } from "@playwright/test"
import { pro2 } from "./helperLogin"

test('Login in page', async ({page}) => {
    //Act
     await pro2(page)
        
    //Assert
     await expect(page.getByText('Newsroom CMS')).toBeVisible();
})