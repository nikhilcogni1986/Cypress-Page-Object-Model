///<reference types = "cypress"/>
import Sauce_HomePage_PO from "../../support/pageObjects/SauceDemo/Sauce_HomePage_PO";
import Sauce_InventoryPage_PO from "../../support/pageObjects/SauceDemo/Sauce_InventoryPage_PO";

describe('Contact Us Page', function(){

    before(()=>{
        cy.fixture("SauceUsers.json").then(function(data){
            globalThis.data = data;
        });
    });

    this.afterEach(()=>{
        sauceInventoryPage.elements.menuIcon().click();
        sauceInventoryPage.elements.lnkAllItems().should('be.visible');
        sauceInventoryPage.elements.lnkAbout().should('be.visible');
        sauceInventoryPage.elements.lnkLogout().should('be.visible').click();
    })

    const sauceHomePage = new Sauce_HomePage_PO();
    const sauceInventoryPage = new Sauce_InventoryPage_PO();

    it('Navigate to Sauce Home Page', function(){
        cy.visit("https://www.saucedemo.com/");
        sauceHomePage.elements.imgSwagLabs().should('be.visible')
        sauceHomePage.elements.txtUsername().type("standard_user");
        sauceHomePage.elements.txtPassword().type("secret_sauce");
        sauceHomePage.elements.btnLogin().click();

        //validate Inventory Page is displayed
        cy.url().should('include',"inventory.html");
        sauceInventoryPage.elements.imgSwagLabs().should('be.visible')      
    });

    it('Navigate to Sauce Home Page using json data', function(){
        cy.visit("https://www.saucedemo.com/");
        sauceHomePage.elements.imgSwagLabs().should('be.visible')
        sauceHomePage.elements.txtUsername().type(globalThis.data.username);
        sauceHomePage.elements.txtPassword().type(globalThis.data.password);
        sauceHomePage.elements.btnLogin().click();

        //validate Inventory Page is displayed
        cy.url().should('include',"inventory.html");
        sauceInventoryPage.elements.imgSwagLabs().should('be.visible')      
    });

    it('Navigate to Sauce Home Page using common login function', function(){
        cy.visit("https://www.saucedemo.com/");
        cy.loginToApplication(globalThis.data.username, globalThis.data.password);

        //validate Inventory Page is displayed
        cy.url().should('include',"inventory.html");
        sauceInventoryPage.elements.imgSwagLabs().should('be.visible')      
    });

});