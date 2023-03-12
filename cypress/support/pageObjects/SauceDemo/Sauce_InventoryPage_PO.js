class Inventory_Page_PO
{
    elements = {
        imgSwagLabs: () => cy.get("div.app_logo"),
        lblTitle: () => cy.get("span.title"),
        menuIcon: () => cy.get("#react-burger-menu-btn"),
        lnkAllItems: () => cy.get("#inventory_sidebar_link"),
        lnkAbout: ()=> cy.get("#about_sidebar_link"),
        lnkLogout: () => cy.get("#logout_sidebar_link")
    }
}
export default Inventory_Page_PO;