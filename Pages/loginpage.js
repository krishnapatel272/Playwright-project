const {expect} = require("@playwright/test")


class LoginPage{

  constructor(page){
    this.page = page;
    this.username = "#user-name";
    this.password = "#password";
    this.button= "#login-button";
  }

  async successfulLogin(username,password){
    await this.page.goto("https://www.saucedemo.com/");
    await this.page.fill(this.username,username);
    await this.page.fill(this.password,password);
    await this.page.click(this.button);
    await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html")
  }

 async unsuccesfulLogin(username,password){
    await this.page.goto("https://www.saucedemo.com/");
    await this.page.fill(this.username,'standard_user');
    await this.page.fill(this.password,'test');
    await this.page.click(this.button);
  }

  async lockedAccount(username,password){
    await this.page.goto("https://www.saucedemo.com/");
    await this.page.fill(this.username,'locked_out_user');
    await this.page.fill(this.password,'secret_sauce');
    await this.page.click(this.button);
  }

  async slowLogin(username,password){
    await this.page.goto("https://www.saucedemo.com/");
    await this.page.fill(this.username,'performance_glitch_user');
    await this.page.fill(this.password,'secret_sauce');
    await this.page.click(this.button);
  }

}

module.exports=LoginPage;