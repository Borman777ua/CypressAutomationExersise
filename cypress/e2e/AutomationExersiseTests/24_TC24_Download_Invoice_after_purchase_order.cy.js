import CartPage from "../../support/AutomationExersisePageObject/CartPage"
import HomePage from "../../support/AutomationExersisePageObject/HomePage"
import ProductsPage from "../../support/AutomationExersisePageObject/ProductsPage"
import SignUpPage from "../../support/AutomationExersisePageObject/SignUpPage"
import navigation from "../../support/AutomationExersisePageObject/navigation"

/*
Test Case 24: Download Invoice after purchase order
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
19. Click 'Download Invoice' button and verify invoice is downloaded successfully.
20. Click 'Continue' button
21. Click 'Delete Account' button
22. Verify 'ACCOUNT DELETED!' and click 'Continue' button
*/

describe("Test Case 24: Download Invoice after purchase order", () => {
    before(() => {
        cy.visit("/")
        HomePage._verifyHomePage()
    })
    it("Test Case 24: Download Invoice after purchase order", () => {
        let email = Cypress.env("testEmail")
        let filename = "invoice.txt"
        cy.registerUser(email);
        HomePage._verifyNewElementsAfterRegistration()
        navigation._navigationToProducts()
        ProductsPage._addProductToCart("1")
        navigation._navigationToCart()
        CartPage._executeBuyOperation()
        CartPage._downloadInvoiceAndVerify(filename)
        SignUpPage._executeAccountDeletion()
    })
})