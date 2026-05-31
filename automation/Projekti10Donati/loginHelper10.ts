export async function openLoginForm2(page:any) {
  const email = 'editor@newsdesk.com';
  const password = 'News123';

  await page.goto('http://localhost:5173/');
  await page.getByText('projekti 2').click();
  await page.getByLabel('Email').fill(email);
  await page.getByLabel('password').nth(0).fill(password);
  await page.getByText('Login').nth(1).click();
}