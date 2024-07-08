/*
Test Case 17: Remove Products From Cart
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Add products to cart
5. Click 'Cart' button
6. Verify that cart page is displayed
7. Click 'X' button corresponding to particular product
8. Verify that product is removed from the cart
*/

import CartPage from "../../support/AutomationExersisePageObject/CartPage"
import HomePage from "../../support/AutomationExersisePageObject/HomePage"
import ProductsPage from "../../support/AutomationExersisePageObject/ProductsPage"
import navigation from "../../support/AutomationExersisePageObject/navigation"


describe("Test Case 17: Remove Products From Cart", () => {
    before(() => {
        cy.visit("/")
        HomePage._verifyHomePage()
    })
    it("Test Case 17: Remove Products From Cart", () => {
        navigation._navigationToProducts()
        ProductsPage._addProductToCart("1")
        navigation._navigationToCart()
        CartPage._removeFromCart("1")
    })
})