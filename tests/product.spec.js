const { test, expect } = require("../fixtures/product.fixture.js");

test("Add item to cart", async function({loginPage, productPage}){
  await loginPage.successfulLogin()
  await productPage.addToCart();
  await productPage.proceedToCart();


}
)

test("Remove item from cart", async function({loginPage, productPage}){
  await loginPage.successfulLogin()
  await productPage.addToCart();
  await productPage.removeFromCart();
}


)

test("Filter an option", async function({loginPage, productPage}){
  await loginPage.successfulLogin()
  await productPage.filterOption();
})