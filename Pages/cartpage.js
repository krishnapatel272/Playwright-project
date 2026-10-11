const {expect} = require("@playwright/test")

class Cartpage{

  constructor(page){
  this.page=page;
  this.checkoutButton="#checkout";
  this.continueShoppingButton="#continue-shopping";
  this.qty=".cart_quantity";
  this.removeButton="#remove-sauce-labs-backpack";
  this.cartBadge=".shopping_cart_badge";
  }

  async proceedToCheckout(){
  await this.page.click(this.checkoutButton);
  await expect(this.page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html");
  }

  async continueShopping(){
    await this.page.click(this.continueShoppingButton);
    await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html");

  }
  
  async removeItem(){
    await this.page.click(this.removeButton);
    await expect(this.page.locator(this.cartBadge)).toBeHidden();

  }
  
}

module.exports = Cartpage;