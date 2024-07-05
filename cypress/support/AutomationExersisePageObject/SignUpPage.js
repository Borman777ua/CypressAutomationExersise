import elementVerification from "./elementVerification"
import navigation from "./navigation"

let baseUrl = Cypress.config('baseUrl')

const name = Cypress.env("testName")
const password = Cypress.env("testPassword")
const firstName = Cypress.env("testFirstName")
const lastName = Cypress.env("testLastName")
const company = Cypress.env("testCompany")
const street = Cypress.env("testStreet")
const country = Cypress.env("testCountry")
const state = Cypress.env("testState")
const city = Cypress.env("testCity")
const zipCode = Cypress.env("testZipCode")
const mobileNumber = Cypress.env("testMobileNumber")
const address = `${street}, ${zipCode}, ${company}`;

let accountCreatedMessage = "Congratulations! Your new account has been successfully created!"
let accountCreatedDescription = "You can now take advantage of member privileges to enhance your online shopping experience with us."
let accountDeletedMessage = "Your account has been permanently deleted!"
let accountDeletedDescription = "You can create new account to take advantage of member privileges to enhance your online shopping experience with us."
let loginMessage = "Login to your account"
let signupMessage = "New User Signup!"

class SingUpPage {

    _executeRegistration(email) {
        this._verifyElementsOnLoginPageSignUp()
        this._startRegistration(email)
        this._inputRegistrationValues()
        this._submitRegistration()
        this._verifyAccountCreatedMessage()
        navigation._continueAction()
    }

    _executeAccountDeletion() {
        this._deleteAccount()
        this._verifyAccountDeletedMessage()
        navigation._continueAction()
    }

    _executeLogIn(email, password) {
        this._verifyElementsOnLoginPageLogin()
        this._logIn(email, password)
        navigation._clickOnElement('[data-qa="login-button"]')
    }

    _logIn(email, password) {
        navigation._typeValues('[data-qa="login-email"]', email)
        navigation._typeValues('[data-qa="login-password"]', password)
    }

    _startRegistration(email) {
        navigation._typeValues('input[data-qa="signup-name"]', name)
        navigation._typeValues('input[data-qa="signup-email"]', email)
        navigation._clickOnElement('button[data-qa="signup-button"]')
    }

    _verifyElementsOnLoginPageLogin() {
        elementVerification._verifyLocatorWhichContainsELement('[class="login-form"]', loginMessage)
        elementVerification._verifyElementOnPage('[data-qa="login-email"]')
        elementVerification._verifyElementOnPage('[data-qa="login-password"]')
        elementVerification._verifyElementOnPageByName('[data-qa="login-button"]', "Login")
    }

    _verifyElementsOnLoginPageSignUp() {
        elementVerification._verifyLocatorWhichContainsELement('[class="signup-form"]', signupMessage)
        elementVerification._verifyElementOnPage('[data-qa="signup-name"]')
        elementVerification._verifyElementOnPage('[data-qa="signup-email"]')
        elementVerification._verifyElementOnPageByName('[data-qa="signup-button"]', "Signup")
    }


    _inputRegistrationValues() {
        navigation._clickOnElement('[value="Mr"]')
        navigation._typeValues('input[data-qa="password"]', password)
        navigation._selectOption('select[data-qa="days"]', '13')
        navigation._selectOption('select[data-qa="months"]', '7')
        navigation._selectOption('select[data-qa="years"]', '1984')
        navigation._typeValues('input[data-qa="first_name"]', firstName)
        navigation._typeValues('input[data-qa="last_name"]', lastName)
        navigation._typeValues('input[data-qa="company"]', company)
        navigation._typeValues('input[data-qa="address"]', address)
        navigation._selectOption('select[data-qa="country"]', country)
        navigation._typeValues('input[data-qa="state"]', state)
        navigation._typeValues('input[data-qa="city"]', city)
        navigation._typeValues('input[data-qa="zipcode"]', zipCode)
        navigation._typeValues('input[data-qa="mobile_number"]', mobileNumber)
    }

    _submitRegistration() {
        navigation._clickOnElementByName('button[data-qa="create-account"]', "Create Account")
    }
    _verifyAccountCreatedMessage() {
        elementVerification._verifyUrl(baseUrl + 'account_created')
        elementVerification._verifyText('[data-qa="account-created"]', "Account Created!")
        elementVerification._verifyLocatorWhichContainsELement('p', accountCreatedMessage)
        elementVerification._verifyLocatorWhichContainsELement('p', accountCreatedDescription)
        elementVerification._verifyElementOnPageByName('[data-qa="continue-button"]', 'Continue')
    }

    _deleteAccount() {
        navigation._clickOnElement('a[href="/delete_account"]')
    }
    _verifyAccountDeletedMessage() {
        elementVerification._verifyText('[data-qa="account-deleted"]', "Account Deleted!")
        elementVerification._verifyLocatorWhichContainsELement('p', accountDeletedMessage)
        elementVerification._verifyLocatorWhichContainsELement('p', accountDeletedDescription)
        elementVerification._verifyElementOnPageByName('[data-qa="continue-button"]', 'Continue')
    }
    _logOut() {
        navigation._clickOnElement('a[href="/logout"]')
        elementVerification._verifyUrl(baseUrl + "login")
    }
}

export default new SingUpPage 