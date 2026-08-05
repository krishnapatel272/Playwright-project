const {expect} = require("@playwright/test")

class Productpage{

  constructor(page){
    this.page=page;
    this.addButton="#add-to-cart-sauce-labs-backpack";
    this.removeButton="#remove-sauce-labs-backpack";
    this.cartBadge=".shopping_cart_badge";
    this.filter=".product_sort_container";
  }

 async addToCart(){
  await this.page.click(this.addButton);
  await expect(this.page.locator(this.removeButton)).toBeVisible();
 }

 async removeFromCart(){
  await this.page.click(this.removeButton);
  await expect(this.page.locator(this.addButton)).toBeVisible();
 }

 async proceedToCart(){
  await this.page.click(this.cartBadge);

 }

 async filterOption(){
  await this.page.click(this.filter);
   }
 }
 
module.exports=Productpage;