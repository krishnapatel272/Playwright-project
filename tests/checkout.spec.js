const {test,expect} = require("@playwright/test")
const LoginPage = require("../pages/loginpage")
const ProductPage = require("../pages/productpage")
const Cart = require("../pages/cartpage")
const Checkout = require("../pages/checkoutpage")

test("Checkout with valid details", async ({page})=>{
  await page.goto("https://www.saucedemo.com/")
  const loginPage = new LoginPage(page);
  await loginPage.successfulLogin();
  const productPage = new ProductPage(page);
  await productPage.addedToCart();
  await productPage.proceedTocart();
  const cartPage = new Cart(page);
  await cartPage.proceedToCheckout();
  const checkout = new Checkout(page);
  await checkout.checkTitle();
  checkout.validDetails();

})