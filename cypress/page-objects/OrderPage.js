import { faker } from "@faker-js/faker";
const firstNameField = "#billing_first_name";
const lasttNameField = "#billing_last_name";
const countryDropdown = "#billing_country";
const addressField = "#billing_address_1";
const postalCodeField = "#billing_postcode";
const cityField = "#billing_city";
const phoneField = "#billing_phone";
const emailField = "#billing_email";
const finishOrderButton = "#place_order";
const countryDropdownPoland = "Polska";

class OrderPage {
  fillAllRequiredFields() {
    cy.get(firstNameField).type(faker.name.firstName());
    cy.get(lasttNameField).type(faker.name.lastName());
    cy.get(countryDropdown).select(countryDropdownPoland, { force: true });
    cy.get(addressField).type(faker.address.streetAddress());
    cy.get(postalCodeField).type(faker.address.zipCode("##-###"));
    cy.get(cityField).type(faker.address.city());
    cy.get(phoneField).type(faker.phone.number("+48#########"));
    cy.get(emailField).type(faker.internet.email());
  }

  clickFinishOrderButton() {
    cy.get(finishOrderButton).click();
  }

  checkOrderFinished() {
    cy.contains("Zamówienie otrzymane", { timeout: 10000 }).should("exist");
    // TODO Create better assertion
  }
}

export default OrderPage;
