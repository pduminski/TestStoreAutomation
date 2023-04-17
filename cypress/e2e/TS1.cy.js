import HomePage from "../page-objects/homePage";
import MyAccountPage from "../page-objects/myAccountPage";

describe("my first scenario", () => {
  const homePage = new HomePage();
  const myAccountPage = new MyAccountPage();

  before(() => {
    cy.fixture("users").as("userData");
  });

  it("should login to the application", () => {
    homePage.clickMyAccountHeaderButton();
    myAccountPage.fillUsernameFieldWithEmail(this.userData.email);
    myAccountPage.fillPasswordField(this.userData.password);
  });

  it("should not login to the application", () => {});
});
