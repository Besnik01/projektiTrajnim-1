export async function krijimiiporosise (page:any){
  await page.getByLabel('Category').selectOption('Hamburger');
  await page.getByText('Item Name').fill('Classic Burger');
  await page.getByText('Description').fill('2 Hamburgera komplet');
  await page.getByText('Price').nth(1).fill('4.50');
  await page.getByText('Save Item').click();
  await page.getByText('QA Restaurant Menu List').click();
}