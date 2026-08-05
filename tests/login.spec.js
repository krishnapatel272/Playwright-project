const { test, expect } = require("../fixtures/login.fixture");

test("Verify successful login", async function({loginPage}){
    await loginPage.successfulLogin();
})

test('Verify unsuccessful login', async function({loginPage}){
   await loginPage.unsuccessfulLogin();
})

test('Verify login performance', async function({loginPage}){
    await loginPage.slowLogin();
})