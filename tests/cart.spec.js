const { test, expect } = require("../fixtures/cart.fixture.js");
const testData = require("../testdata.json");


test("Proceed to checkout", async function({ loginPage, productPage, cartPage}){
  await loginPage.successfulLogin(testData[0].username,testData[0].password);
  await productPage.addToCart();
  await productPage.proceedToCart();
  await cartPage.proceedToCheckout();

})

test("Click Continue Shopping", async function({ loginPage, productPage, cartPage}){
  await loginPage.successfulLogin(testData[0].username,testData[0].password);
  await productPage.addToCart();
  await productPage.proceedToCart();
  await cartPage.continueShopping();
})

test("Remove item from cart", async function({ loginPage, productPage, cartPage}){
  await loginPage.successfulLogin(testData[0].username,testData[0].password);
  await productPage.addToCart();
  await productPage.proceedToCart();
  await cartPage.removeItem();
})