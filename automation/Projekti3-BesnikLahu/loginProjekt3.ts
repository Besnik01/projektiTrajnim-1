export async function loginprojekt3 (page:any) {
  await page.goto('http://localhost:5173/')
  await page.getByText('Projekti 3').nth(0).click()
  await page.getByLabel('Email').fill('manager@restaurantmenu.com')
  await page.getByText('Password').nth(0).click()
  await page.keyboard.type('Menu123')
  await page.getByText('Login').nth(1).click()
}