const {expect} = require("@playwright/test")

class LoginPage{

  constructor(page){
    this.page = page;
    this.username = "#user-name";
    this.password = "#password";
    this.button= "#login-button";
    this.information="#login_credentials"
  }

  async successfulLogin(){
    await this.page.fill(this.username,'standard_user');
    await this.page.fill(this.password,'secret_sauce');
    await this.page.click(this.button);
  }

  async unsuccessfulLogin(){
    await this.page.fill(this.username,'locked_out_user');
    await this.page.fill(this.password,'secret_sauce');
    await this.page.click(this.button);
  }

  async slowLogin(){
    await this.page.fill(this.username,'performance_glitch_user');
    await this.page.fill(this.password,'secret_sauce');
    await this.page.click(this.button);
  }

  async checkInformation(){
    await expect(this.page.locator(this.information).toBeVisible());
  }

}

module.exports=LoginPage;