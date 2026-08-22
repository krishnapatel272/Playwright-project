const {expect} = require("@playwright/test");


class Checkout{

constructor(page){
this.page=page;
this.firstname = "#first-name";
this.lastname = "#last-name";
this.postcode = "#postal-code";
this.continue = "#continue";
this.title="Checkout: Your Information";
this.errorButton =".error-button";
this.finishButton ="#finish";
this.checkoutComplete = "#checkout_complete_container";


}

async successfulCheckout(){
  await this.page.fill(this.firstname,'test');
  await this.page.fill(this.lastname,'test');
  await this.page.fill(this.postcode,'test');
  await this.page.click(this.continue);
  await this.page.click(this.finishButton);
  await expect(this.page.locator(this.checkoutComplete)).toBeVisible();
  
}

async blankDetails(){
  await this.page.fill(this.firstname,'');
  await this.page.fill(this.lastname,'');
  await this.page.fill(this.postcode,'');
  await this.page.click(this.continue);
  await expect(this.page.locator(this.errorButton)).toBeVisible();
}

async checkTitle(){
  await expect(this.page.locator(this.title === "Checkout: Your Information")).toBeTruthy();
}

}

module.exports=Checkout