/*
Test Case 21: Add review on product
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Click on 'Products' button
4. Verify user is navigated to ALL PRODUCTS page successfully
5. Click on 'View Product' button
6. Verify 'Write Your Review' is visible
7. Enter name, email and review
8. Click 'Submit' button
9. Verify success message 'Thank you for your review.'
*/

import ProductsPage from "../../support/AutomationExersisePageObject/ProductsPage"
import navigation from "../../support/AutomationExersisePageObject/navigation"

describe("Test Case 21: Add review on product", () => {
    before(() => {
        cy.visit("/")
    })

    it("Test Case 21: Add review on product", () => {
        const email = Cypress.env("testEmail")
        const name = Cypress.env("testName")
        navigation._navigationToProducts()
        ProductsPage._verifyAllProducts()
        ProductsPage._selectProduct("1")
        ProductsPage._writeReview(name, email)
    })
})