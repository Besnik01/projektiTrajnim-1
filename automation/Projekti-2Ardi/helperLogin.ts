export async function pro2(page: any) {
const link='http://localhost:5173/';
const email = 'editor@newsdesk.com';
const password = 'News123';
    
await page.goto(link)
await page.getByText('Projekti 2').click()
await page.getByLabel('Email').fill(email)
await page.getByLabel('password').nth(0).fill(password)
await page.getByText('Login').nth(1).click()
}


export async function prostory2(page: any) {
const link='http://localhost:5173/';
const email = 'editor@newsdesk.com';
const password = 'News123';

await page.goto(link)
await page.getByText('Projekti 2').click()
await page.getByLabel('Email').fill(email)
await page.getByLabel('password').nth(0).fill(password)
await page.getByText('Login').nth(1).click()
await page.getByLabel('Headline').fill('Storje')
await page.getByLabel('Story Content').fill('Stroje2')
await page.getByLabel('Category').selectOption('Sport');
await page.getByText('Publish Story').click()
}