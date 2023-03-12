import Sauce_HomePage_PO from "../support/pageObjects/SauceDemo/Sauce_HomePage_PO";
import Sauce_InventoryPage_PO from "../support/pageObjects/SauceDemo/Sauce_InventoryPage_PO";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
require('cypress-xpath');
const sauceHomePage = new Sauce_HomePage_PO();
const sauceInventoryPage = new Sauce_InventoryPage_PO();

Cypress.Commands.add('addProductToBasket', product_name => {
    cy.get("div.fixed_wrapper .fixed a").each(($el, index, $list) =>{
        if($el.text() === product_name)
        {
            cy.log($el.text())
            cy.get(".productcart").eq(index).click();
        }
    });    
});

Cypress.Commands.add('loginToApplication', (username, password) => {
    sauceHomePage.elements.imgSwagLabs().should('be.visible')
    sauceHomePage.elements.txtUsername().type(globalThis.data.username);
    sauceHomePage.elements.txtPassword().type(globalThis.data.password);
    sauceHomePage.elements.btnLogin().click();
});
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })