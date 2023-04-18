/// <reference types="cypress" />
import HomePage from "../page-objects/homePage";
import OrderPage from "../page-objects/OrderPage";
import CartPage from "../page-objects/CartPage";

describe("Scenario of the ordering process", () => {
  const homePage = new HomePage();
  const cartPage = new CartPage();
  const orderPage = new OrderPage();

  it("should login to the application", () => {
    homePage.visitPage();
    homePage.addProductToCart();
    homePage.clickGoToCartFromProductButton();
    cartPage.checkThatAddedProductIsInCart();
    cartPage.clickGoToPaymentsButton();
    orderPage.fillAllRequiredFields();
    orderPage.clickFinishOrderButton();
    orderPage.checkOrderFinished();
  });
});
