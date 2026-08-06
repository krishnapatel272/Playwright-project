const { test, expect } = require("../fixtures/login.fixture");
const testData = require("../testdata.json");

test("Verify successful login", async function({loginPage}){
    await loginPage.successfulLogin(testData[0].username,testData[0].password);
})


test("Verify unsuccessful login", async function({loginPage}){
    await loginPage.unsuccesfulLogin(testData[1].username,testData[1].password);
})


test('Verify locked out account', async function({loginPage}){
   await loginPage.lockedAccount(testData[2].username,testData[2].password);
})

test('Verify login performance', async function({loginPage}){
    await loginPage.slowLogin(testData[3].username,testData[3].password);
})