import { test, expect } from '@playwright/test';
import { loginprojekt3 } from './loginProjekt3';
import { krijimiiporosise } from './Krijimiiporosise';

test ('Duhet te behet archive porosia', async ({ page }) =>{
    // Act
    await loginprojekt3(page)
    await krijimiiporosise(page)
    await page.getByRole('button', { name: 'Archive' }).click();
    await page.getByRole('combobox').nth(1).selectOption('Archived only');
    
    // Assert
    await expect(page.getByText('Classic Burger').nth(0)).toBeVisible();
})

test ('Nga Archived te behet restore ne Active', async ({ page }) => {
    // Act
    await loginprojekt3(page)
    await krijimiiporosise(page)
    await page.getByRole('button', { name: 'Archive' }).click();
    await page.getByRole('combobox').nth(1).selectOption('Archived only');
    await page.getByRole('button', { name: 'Restore' }).click();
    await page.getByRole('combobox').nth(1).selectOption('Active only');
    
    // Assert
    await expect(page.getByText('Classic Burger').nth(0)).toBeVisible();
})