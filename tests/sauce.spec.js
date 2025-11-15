// @ts-check
import { test, expect } from '@playwright/test';

test('log in ', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  let userNameTxt = page.getByRole("textbox", {"name" :"Username"})
  let passwordTxt = page.getByRole("textbox", {"name" : "Password"})
  

  await userNameTxt.fill("standard_user");
    await passwordTxt.fill("secret_sauce");
    await page.getByRole('button', {name : "Login"}).click();

  await expect(page.locator('[data-test="title"]')).toBeVisible();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="item-4-title-link"]').click();

  
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
    
   //await page.getByRole("button", {name :"Add to cart"}).click();

  await page.pause();

   //await page.getByRole("button", {name :"Add to cart"}).click();



  //let addcarttxt = page.getByRole("button", {"name" :"Add to cart"})
});

//test('add cart')




