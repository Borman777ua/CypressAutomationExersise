

/*
Test Case 12: Add Products in Cart
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Products' button
5. Hover over first product and click 'Add to cart'
6. Click 'Continue Shopping' button
7. Hover over second product and click 'Add to cart'
8. Click 'View Cart' button
9. Verify both products are added to Cart
10. Verify their prices, quantity and total price
*/

import CartPage from "../../support/AutomationExersisePageObject/CartPage"
import HomePage from "../../support/AutomationExersisePageObject/HomePage"
import ProductsPage from "../../support/AutomationExersisePageObject/ProductsPage"
import navigation from "../../support/AutomationExersisePageObject/navigation"

describe("Test Case 12: Add Products in Cart", () => {
    before(() => {
        cy.visit("/")
        HomePage._verifyHomePage()
    })

    it("Test Case 12: Add Products in Cart", () => {
        navigation._navigationToProducts()
        ProductsPage._addProductToCart("1")
        ProductsPage._addProductToCart("2")
        navigation._navigationToCart()
        CartPage._verifyProductOnTable(1, "Blue Top", "Rs. 500", "1", "Rs. 500")
        CartPage._verifyProductOnTable(2, "Men Tshirt", "Rs. 400", "1", "Rs. 400")
    })
})