const base = require("@playwright/test");
const LoginPage = require("../pages/loginpage.js")
const Productpage = require("../pages/productpage.js")

exports.test = base.test.extend({
   productPage: async ({ page }, use) => {
    await use(new Productpage (page));
   },
   loginPage: async ({ page }, use) => {
    await use(new LoginPage (page));

  },
});


exports.expect = base.expect;