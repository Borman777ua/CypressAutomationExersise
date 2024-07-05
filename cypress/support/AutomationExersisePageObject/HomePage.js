import ProductsPage from "./ProductsPage"
import elementVerification from "./elementVerification"
import navigation from "./navigation"

const name = Cypress.env("testName")
class HomePage {

    _verifyHomePage() {
        cy.url().should('contain', "/")
        elementVerification._verifyHeadPannel()
        this._verifyCarusels()
        elementVerification._verifyProductCard()
    }

    _verifyCarusels() {
        elementVerification._verifyElementOnPage('[id="slider-carousel"]')
        elementVerification._verifyElementOnPage('[id="recommended-item-carousel"]')
    }

    _verifyFeaturedItems() {
        elementVerification._verifyElementOnPageByName('div[class="features_items"]', "Features Items")
    }


    _verifyNewElementsAfterRegistration() {
        elementVerification._verifyElementOnPage('a[href="/logout"]')
        elementVerification._verifyElementOnPage('a[href="/delete_account"]')
        cy.get('a').contains("Logged in as").should('be.visible')
        cy.get('b').contains(name).should('be.visible')
    }
    _executeSubscription(email) {
        elementVerification._verifyLocatorWhichContainsELement('[id="footer"]', "Subscription")
        navigation._typeValues('input[id="susbscribe_email"]', email)
        navigation._clickOnElement('button[id="subscribe"]')
        elementVerification._verifyText('[class="alert-success alert"]', "You have been successfully subscribed!")
    }

    _addToCartFromRecomendedItems(productID) {
        elementVerification._verifyLocatorWhichContainsELement('div[class="recommended_items"]', "recommended items")
        cy.get('div[class="recommended_items"]').find(`a[data-product-id="${productID}"]`).click()
        ProductsPage._continueShopping()
    }
}

export default new HomePage 