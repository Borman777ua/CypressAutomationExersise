

/*
Test Case 15: Place Order: Register before Checkout
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Signup / Login' button
5. Fill all details in Signup and create account
6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
7. Verify ' Logged in as username' at top
8. Add products to cart
9. Click 'Cart' button
10. Verify that cart page is displayed
11. Click Proceed To Checkout
12. Verify Address Details and Review Your Order
13. Enter description in comment text area and click 'Place Order'
14. Enter payment details: Name on Card, Card Number, CVC, Expiration date
15. Click 'Pay and Confirm Order' button
16. Verify success message 'Your order has been placed successfully!'
17. Click 'Delete Account' button
18. Verify 'ACCOUNT DELETED!' and click 'Continue' button
*/

import CartPage from "../../support/AutomationExersisePageObject/CartPage"
import HomePage from "../../support/AutomationExersisePageObject/HomePage"
import ProductsPage from "../../support/AutomationExersisePageObject/ProductsPage"
import SignUpPage from "../../support/AutomationExersisePageObject/SignUpPage"
import navigation from "../../support/AutomationExersisePageObject/navigation"


before(() => {
    cy.visit("/")
    HomePage._verifyHomePage()
})



it("Test Case 15: Place Order: Register before Checkout", () => {
    let email = Cypress.env("testEmail")
    cy.registerUser(email);
    HomePage._verifyNewElementsAfterRegistration()
    navigation._navigationToProducts()
    ProductsPage._addProductToCart("1")
    navigation._navigationToCart()
    CartPage._executeBuyOperation()
    SignUpPage._executeAccountDeletion()
})