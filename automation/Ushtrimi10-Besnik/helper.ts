export async function navigatetoOrbit9 (page:any) {
 
   await page.goto('https://qa-trajnim.netlify.app/');
  await page.getByLabel('Email').fill('instructor@cineplex.com');
  await page.getByText('Password').click();
  await page.keyboard.type('Cinema123');
  await page.getByText('Sign In').nth(1).click();
  await page.getByText('Movies').nth(0).click();
  await page.getByText('Orbit 9').nth(0).click()
  await page.getByText('Save To Plan').click()
  await page.getByText('Close').click()
  await page.getByText('My Plan').click()
}