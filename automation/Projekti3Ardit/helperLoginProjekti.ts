  export async function Loginhelper(page:any) {
  
  await page.goto('http://localhost:5173');
  await page.getByText('Projekti 3').click();
  await page.getByLabel('Email').fill('manager@restaurantmenu.com');
  await page.getByLabel('password').nth(0).fill('Menu123');
  await page.getByText('Login').nth(1).click();
  };