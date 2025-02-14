/*
Test Case 23: Verify address details in checkout page
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
12. Verify that the delivery address is same address filled at the time registration of account
13. Verify that the billing address is same address filled at the time registration of account
14. Click 'Delete Account' button
15. Verify 'ACCOUNT DELETED!' and click 'Continue' button
*/

import CartPage from "../../support/AutomationExersisePageObject/CartPage"
import HomePage from "../../support/AutomationExersisePageObject/HomePage"
import ProductsPage from "../../support/AutomationExersisePageObject/ProductsPage"
import SignUpPage from "../../support/AutomationExersisePageObject/SignUpPage"
import navigation from "../../support/AutomationExersisePageObject/navigation"
const email = Cypress.env("testEmail")
let password = Cypress.env("testPassword")


describe("Test Case 23: Verify address details in checkout page", () => {
    before(() => {
        cy.visit("/")
        HomePage._verifyHomePage()
    })


    it("Test Case 23: Verify address details in checkout page", () => {
        cy.registerUser(email);
        navigation._navigationToProducts()
        ProductsPage._addProductToCart("2")
        navigation._navigationToCart()
        CartPage._proceedToCheckOut()
        CartPage.verifyAdress('[id="address_delivery"]')
        CartPage.verifyAdress('[id="address_invoice"]')
        SignUpPage._deleteAccount()
    })
})