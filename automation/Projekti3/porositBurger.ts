export async function PorositBurger(page:any) {

    await page.getByText('Create Menu Item').nth(0).click()
    await page.locator('#p3-category').selectOption({ label: 'Hamburger' });
    await page.getByPlaceholder('Double Smash Burger').fill('Hamburger Viqi');
    await page.getByPlaceholder('Grilled beef, cheddar, pickles, signature sauce').fill('Test Hamburger Viqi');
    await page.getByPlaceholder('7.90').fill('3.20')
    await page.getByText('Save Item').click();    
}