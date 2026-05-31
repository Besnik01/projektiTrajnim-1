export async function PorositPizza(page:any) {

    await page.getByText('Create Menu Item').nth(0).click()
    await page.locator('#p3-category').selectOption({ label: 'Pizza' });
    await page.getByPlaceholder('Double Smash Burger').fill('Pizza Margarita');
    await page.getByPlaceholder('Grilled beef, cheddar, pickles, signature sauce').fill('Test Pizza ');
    await page.getByPlaceholder('7.90').fill('3.20')
    await page.getByText('Save Item').click();    
}