export async function PorositSallate(page:any) {
    await page.getByText('Create Menu Item').nth(0).click()
    await page.locator('#p3-category').selectOption({ label: 'Sallata' });
    await page.getByPlaceholder('Double Smash Burger').fill('Chicken Salad');
    await page.getByPlaceholder('Grilled beef, cheddar, pickles, signature sauce').fill('Test Sallata');
    await page.getByPlaceholder('7.90').fill('7.20')
    await page.getByText('Save Item').click();    
}