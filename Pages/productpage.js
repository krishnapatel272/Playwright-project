const {expect} = require("@playwright/test")

class Productpage{

  constructor(page){
    this.page=page;
    this.addButton="#add-to-cart-sauce-labs-backpack";
    this.removeButton="#remove-sauce-labs-backpack";
    this.cartBadge=".shopping_cart_badge";
  }

 async addedToCart(){
  await this.page.click(this.addButton);
  await expect(this.page.locator(this.removeButton).toBeVisible());
  await expect(this.page.locator(this.cartBadge).toBeVisible());
 }

 async removeFromCart(){
  await this.page.click(this.removeFromCart);
  await expect(this.page.locator(this.addButton).toBeVisible());
  await expect(this.page.locator(this.cartBadge).toBeHidden());
 }

}
module.exports=Productpage;