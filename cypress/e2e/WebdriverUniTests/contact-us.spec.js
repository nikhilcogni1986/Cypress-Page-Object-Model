///<reference types = "cypress"/>
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact-Us_PO";
import HomePage_PO from "../../support/pageObjects/webdriver-uni/HomePage_PO";

describe('Contact Us Page', function(){

    before(()=>{
        cy.fixture("contact-us.json").then(function(data){
            globalThis.data = data;
        });
    });

    const homePage = new HomePage_PO();
    const contactUsPage = new Contact_Us_PO();

    it('Add contact details', function(){
        homePage.navigate_To_HomePage();
        homePage.navigate_To_ContactUsPage();
        contactUsPage.contactForm_Submission(data.firstname, data.lastname, data.email, data.comments,
            "#contact_reply h1", "Thank You for your Message!");
    });
});