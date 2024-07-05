import elementVerification from "./elementVerification"

let baseUrl = Cypress.config('baseUrl')


class Navigation {

    _clickOnElement(locator) {
        cy.get(locator).click()
    }
    _clickOnElementByName(locator, name) {
        cy.get(locator).contains(name).click()
    }
    _clickOnElementByIndex(locator, index) {
        cy.get(locator).eq(index).click()
    }

    _typeValues(locator, value) {
        cy.get(locator).type(value)
    }

    _selectOption(locator, value) {
        cy.get(locator).select(value)
    }

    _hoverOverElement(locator) {
        cy.contains(locator).trigger('mouseover')
    }

    _selectCattegory(cattegoryName, cattegoryValue, index) {
        elementVerification._verifyCattegoryCard()
        this._clickOnElement(`[href="#${cattegoryName}"]`)
        this._clickOnElement(`[href="/category_products/${index}"]`)
        elementVerification._verifyLocatorWhichContainsELement('h2[class="title text-center"]', `${cattegoryName, cattegoryValue}`)
        elementVerification._verifyUrl(baseUrl + `category_products/${index}`)
    }
    _selectBrand(brandName) {
        elementVerification._verifyBrandCard()
        this._clickOnElement(`[href="/brand_products/${brandName}"]`)
        elementVerification._verifyLocatorWhichContainsELement('[class="title text-center"]', brandName)
    }

    _navigationToHomePage() {
        this._clickOnElementByName('a[href="/"]', "Home")
        elementVerification._verifyUrl(baseUrl)
    }
    _navigationToProducts() {
        this._clickOnElementByName('a[href="/products"]', "Products")
        elementVerification._verifyUrl(baseUrl + "products")
    }
    _navigationToCart() {
        this._clickOnElementByIndex('a[href="/view_cart"]', 0)
        elementVerification._verifyUrl(baseUrl + "view_cart")
    }
    _navigationToSignUpLogin() {
        this._clickOnElementByName('a[href="/login"]', "Signup / Login")
        elementVerification._verifyUrl(baseUrl + "login")
    }
    _navigationToTestCases() {
        this._clickOnElementByName('a[href="/test_cases"]', "Test Cases")
        elementVerification._verifyUrl(baseUrl + "test_cases")
    }
    _navigationToApiTesting() {
        this._clickOnElementByName('a[href="/api_list"]', "API Testing")
        elementVerification._verifyUrl(baseUrl + "api_list")
    }
    _navigationToVideoTutorials() {
        this._clickOnElementByName('a[href="https://www.youtube.com/c/AutomationExercise"]', "Video Tutorials")
        this._solveYoutubeAlert()
        elementVerification._verifyUrl("https://www.youtube.com/c/AutomationExercise")
    }
    _navigationToContactUs() {
        this._clickOnElementByName('a[href="/contact_us"]', "Contact us")
        elementVerification._verifyUrl(baseUrl + "contact_us")
    }
    _solveYoutubeAlert() {
        this._clickOnElementByIndex('form[action="https://consent.youtube.com/save"]', 0)
    }

    _continueAction() {
        this._clickOnElementByName('[data-qa="continue-button"]', 'Continue')
    }

    _verifyDownloadedFile() { }
}


export default new Navigation