import AutoStore_HairCare_PO from "../../support/pageObjects/Automation-test-store/AutoStore_HairCare_PO";
import AutoStore_HomePage_PO from "../../support/pageObjects/Automation-test-store/Autostore_HomePage_PO";

describe('Addition of products to the cart', ()=>{

    const autoStoreHomePage = new AutoStore_HomePage_PO();
    const autoStorehairCarePage = new AutoStore_HairCare_PO();
    
    before(function() {
        cy.fixture("products").then(function(data){
            globalThis.data = data;
        });
    });
    
    it("Add multiple products to the cart", function(){
        autoStoreHomePage.navigate_To_AutomationHomePage();
        autoStoreHomePage.navigate_To_HairCare_ProductsPage();
        autoStorehairCarePage.addHairCareProductsToCart();
    });
});