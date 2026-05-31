import { test, expect } from '@playwright/test';
import { loginprojekt3 } from './loginProjekt3';
import { krijimiiporosise } from './Krijimiiporosise';

test ('Te behet Remove porosia',async ({ page }) => {
    //Act
    await loginprojekt3(page)
    await krijimiiporosise(page)
    await page.getByText('Remove').nth(1).click();

    //Assert
    await expect (page.getByText('No menu items found.')).toBeVisible;
});