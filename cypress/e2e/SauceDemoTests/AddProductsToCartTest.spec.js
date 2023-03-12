///<reference types = "cypress"/>
import Sauce_CheckoutPage_PO from "../../support/pageObjects/SauceDemo/Sauce_CheckoutPage_PO";
import Sauce_InventoryPage_PO from "../../support/pageObjects/SauceDemo/Sauce_InventoryPage_PO";

describe('Add product to cart', ()=>
{
    const sauceInventoryPage = new Sauce_InventoryPage_PO();
    const sauceCheckoutPage = new Sauce_CheckoutPage_PO();

    before(()=>{
        cy.fixture("SauceUsers_login.json").then(function(data){
            globalThis.data = data;
        });
    });

    it("Add a product to the cart", ()=>{
        cy.visit("https://www.saucedemo.com/");
        cy.loginToApplication(globalThis.data.username, globalThis.data.password);

        //validate Inventory Page is displayed
        cy.url().should('include',"inventory.html");
        sauceInventoryPage.elements.imgSwagLabs().should('be.visible');
        
        //add the desired product to the cart
        cy.get("div.inventory_item_label a").should('have.attr','href',"#").and('have.length',6);
        cy.addSauceLabProductToCart("Sauce Labs Fleece Jacket");

        //checkout process
        sauceCheckoutPage.elements.txtProductName().should('have.text','Sauce Labs Fleece Jacket');
        sauceCheckoutPage.elements.txtProductquantity().should('have.text',1);
        sauceCheckoutPage.elements.txtProductPrice().should('include.text',"49.99");
        sauceCheckoutPage.elements.btnCheckout().click();

        sauceCheckoutPage.elements.txtboxFirstName().type("Aman");
        sauceCheckoutPage.elements.txtboxLastName().type("Arora");
        sauceCheckoutPage.elements.txtboxpostcalCode().type("560016");
        sauceCheckoutPage.elements.btnContinue().click();

    });
})