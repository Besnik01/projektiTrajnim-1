import { test, expect } from '@playwright/test';
import { loginprojekt3 } from  './loginProjekt3';
import { krijimiiporosise } from './Krijimiiporosise';

const amount = "4.00"

test ('Duhet te behet edit ndryshojme qmimin', async ({ page }) => {
    //Act
    await loginprojekt3(page)
    await krijimiiporosise(page)
    await page.getByText('Edit').nth(1).click();
    await page.getByText('Price').fill(amount);
    await page.getByText('Save Changes').nth(1).click();
    
    // Assert
    await expect(page.getByText(amount).nth(0)).toBeVisible();
})