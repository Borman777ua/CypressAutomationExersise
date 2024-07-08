/*
Test Case 22: Add to cart from Recommended items
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Scroll to bottom of page
4. Verify 'RECOMMENDED ITEMS' are visible
5. Click on 'Add To Cart' on Recommended product
6. Click on 'View Cart' button
7. Verify that product is displayed in cart page
*/

import CartPage from "../../support/AutomationExersisePageObject/CartPage"
import HomePage from "../../support/AutomationExersisePageObject/HomePage"
import navigation from "../../support/AutomationExersisePageObject/navigation"



describe("Test Case 22: Add to cart from Recommended items", () => {
    before(() => {
        cy.visit("/")
    })

    it("Add to cart from Recommended items", () => {
        HomePage._addToCartFromRecomendedItems("4")
        navigation._navigationToCart()
        CartPage._verifyProductOnTable("4", "Stylish Dress", "Rs. 1500", 1, "Rs. 1500")
    })
})