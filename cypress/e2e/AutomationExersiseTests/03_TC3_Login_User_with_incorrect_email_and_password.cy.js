

/*
Test Case 3: Login User with incorrect email and password
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter incorrect email address and password
7. Click 'login' button
8. Verify error 'Your email or password is incorrect!' is visible
*/

import HomePage from "../../support/AutomationExersisePageObject/HomePage"
import SignUpPage from "../../support/AutomationExersisePageObject/SignUpPage"
import elementVerification from "../../support/AutomationExersisePageObject/elementVerification"
import navigation from "../../support/AutomationExersisePageObject/navigation"


let email = Cypress.env("testEmail2")
let password = Cypress.env("testPassword")
let allertMessage = "Your email or password is incorrect!"

beforeEach(() => {
    cy.visit('/')
    HomePage._verifyHomePage()
    navigation._navigationToSignUpLogin()
})


describe("Test Case 3: Login User with incorrect email and password", () => {
    it("Login with incorrect email", () => {
        let email = "123@mail.com"
        SignUpPage._executeLogIn(email, password)
        elementVerification._verifyAlertMessage(allertMessage)
    })

    it("Login with incorrect password", () => {
        let password = "123!"
        SignUpPage._executeLogIn(email, password)
        elementVerification._verifyAlertMessage(allertMessage)
    })

})