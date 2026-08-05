const {expect} = require("@playwright/test")

class LoginPage{

  constructor(page){
    this.page = page;
    this.username = "#user-name";
    this.password = "#password";
    this.button= "#login-button";
  }

  async successfulLogin(){
    await this.page.goto("https://www.saucedemo.com/");
    await this.page.fill(this.username,'standard_user');
    await this.page.fill(this.password,'secret_sauce');
    await this.page.click(this.button);
    await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html")
  }

  async unsuccessfulLogin(){
    await this.page.goto("https://www.saucedemo.com/");
    await this.page.fill(this.username,'locked_out_user');
    await this.page.fill(this.password,'secret_sauce');
    await this.page.click(this.button);
  }

  async slowLogin(){
    await this.page.goto("https://www.saucedemo.com/");
    await this.page.fill(this.username,'performance_glitch_user');
    await this.page.fill(this.password,'secret_sauce');
    await this.page.click(this.button);
  }

}

module.exports=LoginPage;