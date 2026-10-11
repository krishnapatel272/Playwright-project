const { test, expect } = require("../fixtures/pages.fixture.js");
const testData = require("../testdata.json");


test("Logout from application", async function ({loginPage, navigation}){
  await loginPage.successfulLogin(testData[0].username,testData[0].password);
  await navigation.logout();
})

test("Navigate to About page", async function({loginPage, navigation}){
 await loginPage.successfulLogin(testData[0].username,testData[0].password);
  await navigation.about();

})

test("Click the Dynamic Catalog link", async function({loginPage, navigation}){
 await loginPage.successfulLogin(testData[0].username,testData[0].password);
 await navigation.dynamic();

} )