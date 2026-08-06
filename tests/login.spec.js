const { test, expect } = require("../fixtures/login.fixture");

test("Verify successful login", async function({loginPage}){
    await loginPage.successfulLogin();
})


test("Verify unsuccessful login", async function({loginPage}){
    await loginPage.unsuccesfulLogin();
})


test('Verify locked out account', async function({loginPage}){
   await loginPage.lockedAccount();
})

test('Verify login performance', async function({loginPage}){
    await loginPage.slowLogin();
})