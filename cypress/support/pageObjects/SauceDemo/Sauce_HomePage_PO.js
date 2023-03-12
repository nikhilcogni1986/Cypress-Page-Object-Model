class Sauce_HomePage_PO
{
    elements = {
        txtUsername: () => cy.get("#user-name"),
        txtPassword: () => cy.get("#password"),
        btnLogin: () => cy.get("#login-button"),
        imgSwagLabs: () => cy.get("div.login_logo")
    }
    navigate_To_HomePage()
    {
        cy.visit(Cypress.env("sauceDemo_url"));
    }
}
export default Sauce_HomePage_PO;