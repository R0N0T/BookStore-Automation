import { bookApplication, dataTestId } from "../fixtures/pageObjects.js";

const email = "rohitmnnit.25@gmail.com";
const password = "1234@Pass";
const bookName = "Harry Potter";
const url = "https://www.bookswagon.com/";

describe("Automation of buying a Harry Potter book userflow", () => {
  it("Buying a Harry Potter book userflow", () => {
    cy.visit(url);

    bookApplication
      .searchBar()
      .type(bookName);
    
    bookApplication
      .searchButton()
      .click();
    
    bookApplication
      .addBook()
      .click();
    
    bookApplication
      .totalCartItemsLabel()
      .click();
    
    bookApplication
      .cartQuantityInput()
      .should("have.value", "1");
    
    bookApplication
      .cartPaymentImage()
      .click();
    
    bookApplication
      .emailInput()
      .type(email);
    
    bookApplication
      .passwordInput()
      .type(password);
    
    bookApplication
      .loginButton()
      .click();
    
  });
});
