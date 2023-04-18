import Urls from "./urls";

const myAccountHeaderButton = "#menu-item-100";
const dataBlockNew = "div[data-block-name='woocommerce/product-new']";
const checkCartFromProductLevel = ".added_to_cart.wc-forward";

export const Product = {
  HoodieWithZipper: {
    Locator: "a[data-product_id='51']",
    Name: "Hoodie with Zipper",
  },
  Polo: {
    Locator: "a[data-product_id='53']",
    Name: "Polo",
  },
  Sunglasses: {
    Locator: "a[data-product_id='49']",
    Name: "Sunglasses",
  },
};

class HomePage {
  clickMyAccountHeaderButton() {
    cy.get(myAccountHeaderButton).click();
  }

  addProductToCart() {
    cy.get(dataBlockNew).within(() => {
      cy.get(Product.HoodieWithZipper.Locator).click();
    });
  }

  clickGoToCartFromProductButton() {
    cy.get(dataBlockNew).within(() => {
      cy.get(checkCartFromProductLevel).click();
    });
  }

  visitPage() {
    const urls = new Urls();
    urls.visitHomepage();
  }
}

export default HomePage;
