///<reference types = "cypress"/>
import Sauce_HomePage_PO from "../../support/pageObjects/SauceDemo/Sauce_HomePage_PO";
import Sauce_InventoryPage_PO from "../../support/pageObjects/SauceDemo/Sauce_InventoryPage_PO";

const tests = require("../../fixtures/SauceUsers.json");

describe('Contact Us Page', function(){

    before(()=>{
        cy.fixture("login.json").then(function(data){
            globalThis.data = data;
        });
    });

    const sauceHomePage = new Sauce_HomePage_PO();
    const sauceInventoryPage = new Sauce_InventoryPage_PO();

    this.beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/");
    })
    it('Login in as Locked out user', function(){
        sauceHomePage.elements.imgSwagLabs().should('be.visible')
        sauceHomePage.elements.txtUsername().type("locked_out_user");
        sauceHomePage.elements.txtPassword().type("secret_sauce");
        sauceHomePage.elements.btnLogin().click();

        //validate error message is displayed
        cy.get("h3[data-test='error']").should('be.visible');
        cy.xpath('//*[@id="login_button_container"]//h3/text()').then(($errorText) =>
        {
            let text = $errorText.text();
            cy.log(text)
            expect(text).to.eq("Epic sadface: Sorry, this user has been locked out.")
        });    
    });

    tests.forEach(logintest => {
        it(logintest.name, function(){

            cy.get('[data-test="username"]').type(logintest.username);
            cy.get('[data-test="password"]').type(logintest.password);
            cy.get('[data-test="login-button"]').click();
            cy.log(logintest.username)

            if(logintest.username === 'standard_user')
            {
                cy.get('.title').should('contain.text', logintest.expected);
            }
            else
            {
                cy.get('[data-test="error"]').should('contain.text', logintest.expected);    
            }
        });
    });
});