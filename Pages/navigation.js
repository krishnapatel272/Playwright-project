const {expect} = require("@playwright/test");

class Navigation{

  constructor(page){
  this.page= page;
  this.burgerMenu = "#react-burger-menu-btn";
  this.logoutLink = "#logout_sidebar_link";
  this.aboutLink = "#about_sidebar_link";
  this.dynamicLink = "#dynamic_catalog_sidebar_link";
  this.sliderLink = "#dynamic_catalog_slider_link";
  this.heading = ".title";
  }

  async logout(){
    await this.page.click(this.burgerMenu);
    await this.page.click(this.logoutLink);
    await expect(this.page).toHaveURL("https://www.saucedemo.com/");

  }

  async about(){
    await this.page.click(this.burgerMenu);
    await this.page.click(this.aboutLink);
    await expect(this.page).toHaveTitle("Sauce Labs: AI-Unified Release Assurance Platform");

  }

  async dynamic(){
    await this.page.click(this.burgerMenu);
    await this.page.click(this.dynamicLink);
    await this.page.click(this.sliderLink);
    await expect (this.page.locator(this.heading)).toBeVisible();
  }
}
  module.exports = Navigation;

