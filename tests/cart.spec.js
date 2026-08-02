const{test,expect} = require('@playwright/test');
const LoginPage = require("../Pages/loginpage")
const ProductPage = require("../Pages/productpage")
const Cartpage = require('../Pages/cartpage')

test("Proceed to checkout", async function({page}){
  await page.goto("https://www.saucedemo.com/")
  const loginPage = new LoginPage(page);
  await loginPage.successfulLogin();
  const productPage = new ProductPage(page);
  await productPage.addedToCart();
  await productPage.proceedTocart();
  const cartPage = new Cartpage(page);
  //await cartPage.checkQty();
  await cartPage.proceedToCheckout();
})

test("Click Continue Shopping", async function({page}){
  await page.goto("https://www.saucedemo.com/")
  const loginPage = new LoginPage(page);
  await loginPage.successfulLogin();
  const productPage = new ProductPage(page);
  await productPage.addedToCart();
  const cartPage = new Cartpage(page);
  await cartPage.proceedToCheckout();
  await cartPage.continueShopping();
})

test("Remove item from cart", async function({page}){
  await page.goto("https://www.saucedemo.com/")
  const loginPage = new LoginPage(page);
  await loginPage.successfulLogin();
  const productPage = new ProductPage(page);
  await productPage.addedToCart();
  const cartPage = new Cartpage(page);
  await cartPage.proceedToCheckout();
  await cartPage.removeButton();
})