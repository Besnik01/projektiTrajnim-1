export async function helperlogin(page:any) {
  const link='https://qa-trajnim.netlify.app';
  const email = 'student@projekti1.com';
  const password = 'Projekti123';

  //Act
await page.goto(link)
await page.getByText('Projekti 1').click();
await page.getByText('Email').nth(0).fill('student@projekti1.com');
await page.getByLabel('Password').nth(0).fill('Projekti123');
await page.getByText('Login').nth(1).click();
}
