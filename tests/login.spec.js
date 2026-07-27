const {test,expect} = require('@playwright/test')
const LoginPage = require("../Pages/loginpage")

test("Verifying successful login", async function({page}){
  //Navigate to URL
    await page.goto("https://www.saucedemo.com/");
    const loginpage = new LoginPage(page)
    await loginpage.successfulLogin();
    await loginpage.checkInformation();
    await page.waitForTimeout(3000);

})

test('Verifying unsuccessful login', async function({page}){
  //Navigate to URL
    await page.goto("https://www.saucedemo.com/");
    const loginpage = new LoginPage(page)
    await loginpage.unsuccessfulLogin();
    await page.waitForTimeout(3000);
})

test('Verifying login performance', async function({page}){
  //Navigate to URL
    await page.goto("https://www.saucedemo.com/");
    const loginpage = new LoginPage(page)
    await loginpage.slowLogin();
    await page.waitForTimeout(3000);
})