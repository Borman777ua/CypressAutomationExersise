/*
Test Case 2: Login User with correct email and password
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter correct email address and password
7. Click 'login' button
8. Verify that 'Logged in as username' is visible
9. Click 'Delete Account' button
10. Verify that 'ACCOUNT DELETED!' is visible
*/

import HomePage from "../../support/AutomationExersisePageObject/HomePage"
import SignUpPage from "../../support/AutomationExersisePageObject/SignUpPage"
import navigation from "../../support/AutomationExersisePageObject/navigation"

const email = Cypress.env("testEmail2")
let password = Cypress.env("testPassword")


describe("Test Case 2: Login User with correct email and password", () => {
    before(() => {
        cy.visit('/')
        cy.registerUser(email);
        SignUpPage._logOut()
    })
    beforeEach(() => {
        cy.visit('/')
    })

    it("Test Case 2: Login User with correct email and password", () => {
        HomePage._verifyHomePage()
        navigation._navigationToSignUpLogin()
        SignUpPage._executeLogIn(email, password)
        HomePage._verifyNewElementsAfterRegistration()
        SignUpPage._executeAccountDeletion()
    })
})