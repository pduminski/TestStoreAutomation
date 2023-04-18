/// <reference types="cypress" />
import HomePage from "../page-objects/homePage";
import MyAccountPage from "../page-objects/myAccountPage";
import { Faker, faker } from "@faker-js/faker";

describe("Scenario of logging into the application", () => {
  const homePage = new HomePage();
  const myAccountPage = new MyAccountPage();

  before(() => {
    // somehow .as("usersData") does not work for me, try to fix that
    // cy.fixture("users").as("usersData");
    cy.fixture("users").then(function (value) {});
  });

  it("should login to the application", () => {
    homePage.visitPage();
    homePage.clickMyAccountHeaderButton();

    cy.fixture("users").then(function (value) {
      myAccountPage.fillUsernameFieldWithEmail(value.email);
      myAccountPage.fillPasswordField(value.password);
    });

    myAccountPage.clickLoginButton();
    myAccountPage.checkVisibilityOfMyAccountNavigation();
  });

  it("should not login to the application", () => {
    myAccountPage.visitPage();

    myAccountPage.fillUsernameFieldWithEmail(faker.internet.email());
    myAccountPage.fillPasswordField(faker.internet.password());
    myAccountPage.clickLoginButton();
    myAccountPage.checkVisibilityOfErrorAfterWrongLogin();
  });
});
