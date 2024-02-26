export const bookApplication = {
    searchBar: () => {
        return cy.get('#inputbar');
    },
    searchButton: () => {
        return cy.get('#btnTopSearch');
    },
    addBook: () => {
        return cy.get(":nth-child(2) > .action > :nth-child(4) > .btn-red");
    },
    totalCartItemsLabel: () => {
        return cy.get('#ctl00_lblTotalCartItems');
    },
    cartQuantityInput: () => {
        return cy.get('#ctl00_phBody_BookCart_lvCart_ctrl0_txtQty');
    },
    cartPaymentImage: () => {
        return cy.get('#ctl00_phBody_BookCart_lvCart_imgPayment');
    },
    emailInput: () => {
        return cy.get('#ctl00_phBody_SignIn_txtEmail');
    },
    passwordInput: () => {
        return cy.get('#ctl00_phBody_SignIn_txtPassword');
    },
    loginButton: () => {
        return cy.get('#ctl00_phBody_SignIn_btnLogin');
    }
};

