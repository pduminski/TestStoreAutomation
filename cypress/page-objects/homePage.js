import Urls from "./urls";

const myAccountHeaderButton = "#menu-item-100";

class HomePage {
  clickMyAccountHeaderButton() {
    cy.get(myAccountHeaderButton).click();
  }

  visitPage() {
    const urls = new Urls();
    urls.visitHomepage();
  }
}

export default HomePage;
