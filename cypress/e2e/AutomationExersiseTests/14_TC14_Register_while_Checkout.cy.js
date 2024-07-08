
/*
Test Case 14: Place Order: Register while Checkout
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Add products to cart
5. Click 'Cart' button
6. Verify that cart page is displayed
7. Click Proceed To Checkout
8. Click 'Register / Login' button
9. Fill all details in Signup and create account
10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
11. Verify ' Logged in as username' at top
12.Click 'Cart' button
13. Click 'Proceed To Checkout' button
14. Verify Address Details and Review Your Order
15. Enter description in comment text area and click 'Place Order'
16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
17. Click 'Pay and Confirm Order' button
18. Verify success message 'Your order has been placed successfully!'
19. Click 'Delete Account' button
20. Verify 'ACCOUNT DELETED!' and click 'Continue' button
*/

import CartPage from "../../support/AutomationExersisePageObject/CartPage"
import HomePage from "../../support/AutomationExersisePageObject/HomePage"
import ProductsPage from "../../support/AutomationExersisePageObject/ProductsPage"
import SignUpPage from "../../support/AutomationExersisePageObject/SignUpPage"
import navigation from "../../support/AutomationExersisePageObject/navigation"


describe("Test Case 14: Place Order: Register while Checkout", () => {
    before(() => {
        cy.visit("/")
        HomePage._verifyHomePage()
    })
    it("Test Case 14: Place Order: Register while Checkout", () => {
        let email = Cypress.env("testEmail")
        navigation._navigationToProducts()
        ProductsPage._addProductToCart("1")
        navigation._navigationToCart()
        cy.registerUser(email);
        HomePage._verifyNewElementsAfterRegistration()
        navigation._navigationToCart()
        CartPage._executeBuyOperation()
        SignUpPage._executeAccountDeletion()
    })
})