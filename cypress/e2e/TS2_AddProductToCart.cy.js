/// <reference types="cypress" />
import HomePage from "../page-objects/homePage";
import CartPage from "../page-objects/CartPage";

describe("Scenario of adding product to Cart", () => {
  const homePage = new HomePage();
  const cartPage = new CartPage();

  it("should add product to cart and delete it from there", () => {
    homePage.visitPage();
    homePage.addProductToCart();
    homePage.clickGoToCartFromProductButton();
    cartPage.checkThatAddedProductIsInCart();
    cartPage.removeItemFromCart();
    cartPage.checkThatCartIsEmpty();
  });
});
