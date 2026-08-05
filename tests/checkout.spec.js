const { test, expect } = require("../fixtures/checkout.fixture.js");

test("Checkout with valid details", async ({ loginPage, productPage, cartPage, checkoutPage})=>{
  await loginPage.successfulLogin()
  await productPage.addToCart();
  await productPage.proceedToCart();
  await cartPage.proceedToCheckout();
  await checkoutPage.checkTitle();
  await checkoutPage.validDetails();
})

test("Checkout with blank details", async ({ loginPage, productPage, cartPage, checkoutPage }) => {
  await loginPage.successfulLogin()
  await productPage.addToCart();
  await productPage.proceedToCart();
  await cartPage.proceedToCheckout();
  await checkoutPage.checkTitle();
  await checkoutPage.blankDetails();

})