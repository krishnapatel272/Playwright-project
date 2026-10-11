const { test, expect } = require("../fixtures/pages.fixture.js");
const testData = require("../testdata.json");

test("Verify successful checkout", async function ({ loginPage, productPage, cartPage, checkoutPage}){
  await loginPage.successfulLogin(testData[0].username,testData[0].password);
  await productPage.addToCart();
  await productPage.proceedToCart();
  await cartPage.proceedToCheckout();
  await checkoutPage.checkHeading();
  await checkoutPage.successfulCheckout();
})

test("Verify error state for blank details", async function ({ loginPage, productPage, cartPage, checkoutPage }){
  await loginPage.successfulLogin(testData[0].username,testData[0].password);
  await productPage.addToCart();
  await productPage.proceedToCart();
  await cartPage.proceedToCheckout();
  await checkoutPage.checkHeading();
  await checkoutPage.blankDetails();

})