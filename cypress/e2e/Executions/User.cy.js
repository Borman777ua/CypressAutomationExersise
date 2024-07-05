import SignUpPage from "../../support/AutomationExersisePageObject/SignUpPage";
import navigation from "../../support/AutomationExersisePageObject/navigation";
const email = Cypress.env("testEmail2")
let password = Cypress.env("testPassword")


beforeEach(() => {
    cy.visit('/')
    navigation._navigationToSignUpLogin()
})

it.only("Register User", () => {
    cy.registerUser(email);
    SignUpPage._logOut()
})

it("Execute Login", () => {
    SignUpPage._executeLogIn(email, password)
    SignUpPage._logOut()
})
it("Execute Login and Delete Account", () => {
    SignUpPage._executeLogIn(email, password)
    SignUpPage._executeAccountDeletion()
})


it("Delete User", () => {
    SignUpPage._executeAccountDeletion()
})