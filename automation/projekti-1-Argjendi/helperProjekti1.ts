export async function loginHelperProjekti1(page: any) {
await page.goto('https://qa-trajnim.netlify.app/');
await page.getByText('Projekti 1').click();
await page.getByText('Email').nth(0).fill('student@projekti1.com');
await page.getByLabel('Password').nth(0).fill('Projekti123');
await page.getByText('Login').nth(1).click();
}