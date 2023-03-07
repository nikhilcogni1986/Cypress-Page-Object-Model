class AutoStore_HomePage_PO
{

    navigate_To_AutomationHomePage()
    {
        cy.log("**Navigating To Home Page**");
        cy.visit(Cypress.env("teststore_url"));
    }

    navigate_To_HairCare_ProductsPage()
    {
        cy.get("ul.nav-pills.categorymenu li a[href*='&path=52']").contains("Hair Care").click();
    }
}
export default AutoStore_HomePage_PO;