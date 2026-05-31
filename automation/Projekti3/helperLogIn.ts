export async function login(page:any, email:string, password:string) {
    await page.goto('http://localhost:5173/')
    await page.getByText('Projekti 3').click()
    await page.getByLabel('Email').fill(email)
    await page.getByLabel('Password').nth(0).fill(password)
    await page.getByText('Login').nth(1).click()
}