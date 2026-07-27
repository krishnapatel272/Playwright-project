class Cartpage{

  constructor(page){
  this.page=page;
  this.checkoutButton="#checkout"
  this.continueShoppingButton="#continue-shopping"
  }

  async proceedToCheckout(){
  await this.page.click(this.checkoutButton);
  }

  async continueShopping(){
    await this.page.click(this.continueShoppingButton);

  }
}

module.exports = Cartpage;