class AutoStore_HairCare_PO
{
    addHairCareProductsToCart()
    {
        globalThis.data.productName.forEach(element => {
            cy.addProductToBasket(element);
        });
        cy.get("li.dropdown.hover a[href*='checkout/cart'][class='dropdown-toggle']").click();
    }
}
export default AutoStore_HairCare_PO;