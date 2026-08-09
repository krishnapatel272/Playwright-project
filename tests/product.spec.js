const { test, expect } = require("../fixtures/product.fixture.js");
const testData = require("../testdata.json");

test("Add item to cart", async function({loginPage, productPage}){
  await loginPage.successfulLogin(testData[0].username,testData[0].password);
  await productPage.addToCart();
  await productPage.proceedToCart();
}
)

test("Remove item from cart", async function({loginPage, productPage}){
  await loginPage.successfulLogin(testData[0].username,testData[0].password);
  await productPage.addToCart();
  await productPage.removeFromCart();
}
)

test("Filter an option", async function({loginPage, productPage}){
  await loginPage.successfulLogin(testData[0].username,testData[0].password);
  await productPage.filterOption();
})