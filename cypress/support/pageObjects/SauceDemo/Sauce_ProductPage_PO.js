class Sauce_ProductPage_PO
{
    elements = {
        btnAddToCart: () => cy.get("button[data-test*='add-to-cart']"),
        txtaddToCart: () => cy.get("a.shopping_cart_link span")
    }
}
export default Sauce_ProductPage_PO;