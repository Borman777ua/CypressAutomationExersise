/*
Test Case 4: Logout User
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter correct email address and password
7. Click 'login' button
8. Verify that 'Logged in as username' is visible
9. Click 'Logout' button
10. Verify that user is navigated to login page
*/

import HomePage from "../../support/AutomationExersisePageObject/HomePage";
import SignUpPage from "../../support/AutomationExersisePageObject/SignUpPage";
import navigation from "../../support/AutomationExersisePageObject/navigation";

const email = Cypress.env("testEmail2")
let password = Cypress.env("testPassword")

describe("Test Case 4: Logout User", () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it("Pre Condition:Register User", () => {
        cy.visit('/')
        HomePage._verifyHomePage()
        cy.registerUser(email);
    })

    it("Test Case 4: Logout User", () => {
        navigation._navigationToSignUpLogin()
        SignUpPage._executeLogIn(email, password)
        HomePage._verifyNewElementsAfterRegistration()
        SignUpPage._logOut()
    })


    it("Post Condition: Delete Account", () => {
        navigation._navigationToSignUpLogin()
        cy.deleteAccount(email, password)
    })
})