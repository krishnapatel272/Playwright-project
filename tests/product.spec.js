const {test,expect} = require("@playwright/test")
const LoginPage = require("../Pages/loginpage")
const ProductPage = require("../Pages/productpage")

test("Add to cart", async function({page}){
await page.goto("https://www.saucedemo.com/");
const loginPage = new LoginPage(page);
await loginPage.successfulLogin();
const productPage = new ProductPage(page);
await productPage.addedToCart();

}
)

test("Remove from cart", async function({page}){
await page.goto("https://www.saucedemo.com/");
const loginPage = new LoginPage(page);
await productPage.removeFromCart();

  
})