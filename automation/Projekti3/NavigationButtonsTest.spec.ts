import { test, expect } from '@playwright/test';
import { login } from '../Projekti3/helperLogIn';
import { PorositBurger } from './porositBurger';
import { PorositPizza } from './porositPizza';
import { PorositSallate } from './porositSallate';


// test('Valid email and password', async ({ page }) => {
//     //Arrange
//     const email  = 'manager@restaurantmenu.com'

//     //Act
//     await login(page, email, 'Menu123')
//     await page.getByText('Create Menu Item').nth(0).click()
//     await page.locator('#p3-category').selectOption({ label: 'Pizza' });
//     await page.getByPlaceholder('Double Smash Burger').fill('Margherita Pizza');
//     await page.getByPlaceholder('Grilled beef, cheddar, pickles, signature sauce').fill('Test');
//     await page.getByPlaceholder('7.90').fill('5.20')
//     await page.getByText('Save Item').click();    

//     //Assert
//     await expect(page.getByText('Logout')).toBeVisible()
// })


//Test Negativ 
test('Negative Test - Burger', async({page}) =>{
    //Arrange
    const LlojiBurgerit = "Hamburger Viqi"

    //Act
    await login(page, 'manager@restaurantmenu.com', 'Menu123');
    await PorositBurger(page)
    await page.getByText('QA Restaurant Menu List').click();
    await page.getByText('Archive').nth(1).click();

    //Assert
    await expect(page.getByText(LlojiBurgerit)).not.toBeVisible()
})


test('Archieve Test - Burger', async({page}) =>{
    
     //Arrange
    const LlojiBurgerit = "Hamburger Viqi"

    //Act
    await login(page, 'manager@restaurantmenu.com', 'Menu123');
    await PorositBurger(page)
    await page.getByText('QA Restaurant Menu List').click();
    await page.getByText('Archive').nth(1).click();
    await page.locator('select').nth(1).selectOption({ value: 'archived' });

    //Assert
    await expect(page.getByText(LlojiBurgerit).nth(0)).toBeVisible()
})


test('Categetories Test - Pizza', async({page}) =>{
     //Arrange
    const LlojiPices = "Pizza Margarita"

    //Act
    await login(page, 'manager@restaurantmenu.com', 'Menu123');
    await PorositPizza(page)
    await page.getByText('QA Restaurant Menu List').click();
    await page.locator('select').nth(0).selectOption({ value: 'Pizza' });

    //Assert
    await expect(page.getByText(LlojiPices).nth(0)).toBeVisible()
})

//Test Negativ Pizza
test('Negative Test - Pizza', async({page}) =>{
   //Arrange
    const LlojiPices = "Pizza Margarita"

    //Act
    await login(page, 'manager@restaurantmenu.com', 'Menu123');
    await PorositPizza(page)
    await page.getByText('QA Restaurant Menu List').click();
    await page.locator('select').nth(0).selectOption({ value: 'Pizza' });
    await page.getByText('Remove').nth(1).click()
    
    //Assert
    await expect(page.getByText(LlojiPices)).not.toBeVisible()
})

test('Search Test - Sallata', async({page}) =>{
    //Arrange 
    const sallata = "Chicken Salad"

    //Act
    await login(page, 'manager@restaurantmenu.com', 'Menu123');
    await PorositSallate(page)
    await page.getByText('QA Restaurant Menu List').click();
    await page.getByPlaceholder('Search item or description').fill('Sallata ');
   
    //Assert
    await expect(page.getByText(sallata).nth(0)).toBeVisible()
})

