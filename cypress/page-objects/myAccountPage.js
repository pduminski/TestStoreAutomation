import Urls from "./urls";

const usernameEmailField = "#username";
const passwordField = "#password";
const loginButton = "button[name='login']";

class MyAccountPage {
  fillUsernameFieldWithEmail(email) {
    cy.get(usernameEmailField).type(email);
  }

  fillPasswordField(password) {
    cy.get(passwordField).type(password);
  }

  clickLoginButton() {
    cy.get(loginButton).click();
  }

  visitPage() {
    const urls = new Urls();
    urls.visitMyAccountPage();
  }
}

export default MyAccountPage;
