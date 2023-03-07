class Contact_Us_PO
{
    contactForm_Submission(firstName, lastName, emailAddr, comment, $selector, textToLocate)
    {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.xpath("//input[@name='first_name']").type(firstName);
        cy.xpath("//input[@name='last_name']").type(lastName);
        cy.xpath("//input[@name='email']").type(emailAddr);
        cy.get('textarea.feedback-input').type(comment);
        cy.get("input[class='contact_button'][value='SUBMIT']").click();
        cy.get($selector).contains(textToLocate, {timeout:60000});
    }
}
export default Contact_Us_PO;