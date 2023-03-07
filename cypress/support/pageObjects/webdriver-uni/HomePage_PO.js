class HomePage_PO
{
    navigate_To_HomePage()
    {
        cy.visit(Cypress.env("webdriveruni_url"));
    }

    navigate_To_ContactUsPage()
    {
        cy.xpath("//a[contains(@href,'contactus.html')]").invoke('removeAttr', 'target').click();
    }
}
export default HomePage_PO;