import elementVerification from "./elementVerification"
import navigation from "./navigation"


const firstName = Cypress.env("testFirstName")
const lastName = Cypress.env("testLastName")
const country = Cypress.env("testCountry")
const state = Cypress.env("testState")
const city = Cypress.env("testCity")
const company = Cypress.env("testCompany")
const street = Cypress.env("testStreet")
const zipCode = Cypress.env("testZipCode")
const mobileNumber = Cypress.env("testMobileNumber")
const address = `${street}, ${zipCode}, ${company}`;



const nameOnCard = Cypress.env("testName")
const cardNumber = Cypress.env("testCardNumber")
const cvc = Cypress.env("testCVC")
const expirationMonth = Cypress.env("testMM")
const exprirationYear = Cypress.env("testYYYY")

class CartPage {
    _verifyProductOnTable(productID, productName, productPrice, productQuantity, productTotal) {
        elementVerification._verifyElementOnPage(`tr[id="product-${productID}"]`)
        elementVerification._verifyElementOnPageByName(`tr[id="product-${productID}"]`, productName)
        elementVerification._verifyElementOnPageByName(`tr[id="product-${productID}"]`, productPrice)
        elementVerification._verifyElementOnPageByName(`tr[id="product-${productID}"]`, productQuantity)
        elementVerification._verifyElementOnPageByName(`tr[id="product-${productID}"]`, productTotal)
    }

    _executeBuyOperation() {
        this._proceedToCheckOut()
        this._placeOrder()
        this._enterPaymentData()
        this._verifyOrderHasBeenPlaced()
    }


    _proceedToCheckOut() {
        navigation._clickOnElementByName('a', "Proceed To Checkout")
    }

    _placeOrder() {
        navigation._typeValues('[class="form-control"]', "Lorem ipsum")
        navigation._clickOnElementByName('a[href="/payment"]', "Place Order")
    }

    _enterPaymentData() {
        navigation._typeValues('input[data-qa="name-on-card"]', nameOnCard)
        navigation._typeValues('input[data-qa="card-number"]', cardNumber)
        navigation._typeValues('input[data-qa="cvc"]', cvc)
        navigation._typeValues('input[data-qa="expiry-month"]', expirationMonth)
        navigation._typeValues('input[data-qa="expiry-year"]', exprirationYear)
        navigation._clickOnElement('button[data-qa="pay-button"]')
        // elementVerification._verifyLocatorWhichContainsELement('div[class="alert-success alert"]', "Your order has been placed successfully!")
    }

    _verifyOrderHasBeenPlaced() {
        elementVerification._verifyText('[data-qa="order-placed"]', "Order Placed!")
        elementVerification._verifyLocatorWhichContainsELement('p', "Congratulations! Your order has been confirmed!")
    }

    _removeFromCart(index) {
        cy.get('[class="cart_delete"]').find(`[data-product-id="${index}"]`).click()
        elementVerification._verifyElementWasRemovedFromCart(`tr[id="product-${index}"]`)
    }

    verifyAdress(locator) {
        elementVerification._verifyLocatorWhichContainsELement(locator, firstName)
        elementVerification._verifyLocatorWhichContainsELement(locator, lastName)
        elementVerification._verifyLocatorWhichContainsELement(locator, address)
        elementVerification._verifyLocatorWhichContainsELement(locator, country)
        elementVerification._verifyLocatorWhichContainsELement(locator, mobileNumber)
        elementVerification._verifyLocatorWhichContainsELement(locator, state)
        elementVerification._verifyLocatorWhichContainsELement(locator, city)

    }
    _downloadInvoiceAndVerify(filename) {
        navigation._clickOnElementByName('a', "Download Invoice")
        cy.verifyDownload(filename)
    }

}
export default new CartPage
