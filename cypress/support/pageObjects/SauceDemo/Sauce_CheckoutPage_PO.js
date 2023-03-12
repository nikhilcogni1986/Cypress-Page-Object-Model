class Sauce_CheckoutPage_PO
{
    elements = {
        txtProductName: () => cy.get("div.cart_item_label a div"),
        txtProductquantity: () => cy.get("div.cart_quantity"),
        txtProductPrice: () => cy.get("div.item_pricebar div.inventory_item_price"),
        btnCheckout: () => cy.get("#checkout"),
        txtboxFirstName: ()=> cy.get('[data-test="firstName"]'),
        txtboxLastName:() => cy.get('[data-test="lastName"]'),
        txtboxpostcalCode: () => cy.get('[data-test="postalCode"]'),
        btnContinue: () => cy.get('[data-test="continue"]')
    }
}
export default Sauce_CheckoutPage_PO;