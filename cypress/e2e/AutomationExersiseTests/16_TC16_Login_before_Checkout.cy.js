/*
Test Case 16: Place Order: Login before Checkout
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Signup / Login' button
5. Fill email, password and click 'Login' button
6. Verify 'Logged in as username' at top
7. Add products to cart
8. Click 'Cart' button
9. Verify that cart page is displayed
10. Click Proceed To Checkout
11. Verify Address Details and Review Your Order
12. Enter description in comment text area and click 'Place Order'
13. Enter payment details: Name on Card, Card Number, CVC, Expiration date
14. Click 'Pay and Confirm Order' button
15. Verify success message 'Your order has been placed successfully!'
16. Click 'Delete Account' button
17. Verify 'ACCOUNT DELETED!' and click 'Continue' button
*/

import CartPage from "../../support/AutomationExersisePageObject/CartPage"
import HomePage from "../../support/AutomationExersisePageObject/HomePage"
import ProductsPage from "../../support/AutomationExersisePageObject/ProductsPage"
import SignUpPage from "../../support/AutomationExersisePageObject/SignUpPage"
import navigation from "../../support/AutomationExersisePageObject/navigation"


const email = Cypress.env("testEmail")
let password = Cypress.env("testPassword")


beforeEach(() => {
    cy.visit('/')
})



it("Pre Condition:Register User", () => {
    cy.visit('/')
    HomePage._verifyHomePage()
    cy.registerUser(email);
})


it("Test Case 16: Place Order: Login before Checkout", () => {
    HomePage._verifyHomePage()
    navigation._navigationToSignUpLogin()
    SignUpPage._executeLogIn(email, password)
    HomePage._verifyNewElementsAfterRegistration()
    navigation._navigationToProducts()
    ProductsPage._addProductToCart("1")
    navigation._navigationToCart()
    CartPage._executeBuyOperation()
    SignUpPage._executeAccountDeletion()
})
