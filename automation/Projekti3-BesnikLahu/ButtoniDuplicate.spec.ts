import { test, expect } from '@playwright/test';
import { loginprojekt3 } from './loginProjekt3';
import { krijimiiporosise } from './Krijimiiporosise';

test ('Duhet te behet duplicate porosia', async ({ page  }) => {
    //Act 
    await loginprojekt3(page)
    await krijimiiporosise(page)
    await page.getByText('Duplicate').click();

    //Assert
    await expect(page.getByText('Classic Burger (Copy)')).toBeVisible();
});