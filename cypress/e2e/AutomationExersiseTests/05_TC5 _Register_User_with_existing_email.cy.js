/*
Test Case 5: Register User with existing email
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and already registered email address
7. Click 'Signup' button
8. Verify error 'Email Address already exist!' is visible
*/

import HomePage from "../../support/AutomationExersisePageObject/HomePage";
import SignUpPage from "../../support/AutomationExersisePageObject/SignUpPage";
import elementVerification from "../../support/AutomationExersisePageObject/elementVerification";
import navigation from "../../support/AutomationExersisePageObject/navigation";

const email = Cypress.env("testEmail2")
let password = Cypress.env("testPassword")
let allertMessage = "Email Address already exist!"

describe("Test Case 5: Register User with existing email", () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it("Pre Condition:Register User", () => {
        cy.visit('/')
        HomePage._verifyHomePage()
        cy.registerUser(email);
    })

    it("Test Case 5: Register User with existing email", () => {
        navigation._navigationToSignUpLogin()
        SignUpPage._startRegistration(email)
        elementVerification._verifyAlertMessage(allertMessage)
    })
    it("Post Condition: Delete Account", () => {
        navigation._navigationToSignUpLogin()
        cy.deleteAccount(email, password)
    })
})