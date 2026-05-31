export async function PorositSallate(page:any) {
    // await page.goto('http://localhost:5173/')
    // await page.getByText('Projekti 3').click()
    // await page.getByLabel('Email').fill(email)
    // await page.getByLabel('Password').nth(0).fill(password)
    // await page.getByText('Login').nth(1).click()

    await page.getByText('Create Menu Item').nth(0).click()
    await page.locator('#p3-category').selectOption({ label: 'Sallata' });
    await page.getByPlaceholder('Double Smash Burger').fill('Chicken Salad');
    await page.getByPlaceholder('Grilled beef, cheddar, pickles, signature sauce').fill('Test Sallata');
    await page.getByPlaceholder('7.90').fill('7.20')
    await page.getByText('Save Item').click();    
}