export async function QRcode(page: any) {
await page.getByText('QR Title').fill('trajnimi')
await page.getByText('URL / Content').fill('trajnimi')
await page.getByText('Create / Save').click();

}