
class ElementVerification {

    _verifyElementOnPageByName(locator, name) {
        cy.get(locator).should('contain', name).should('exist')
    }
    _verifyElementOnPage(locator) {
        cy.get(locator).should('exist')
    }

    _verifyUrl(name) {
        cy.url().should('contain', name)
    }

    _verifyText(locator, text) {
        cy.get(locator).should('have.text', text).should('exist')
    }
    _verifyLocatorWhichContainsELement(locator, value) {
        cy.get(locator).contains(value).should('exist').should('be.visible').should('contain', value)
    }


    _verifyHeadPannel() {
        this._verifyElementOnPageByName('a[href="/"]', "Home")
        this._verifyElementOnPageByName('a[href="/products"]', "Products")
        this._verifyElementOnPageByName('a[href="/view_cart"]', "Cart")
        this._verifyElementOnPage('a[href="/"]')
        this._verifyElementOnPageByName('a[href="/login"]', "Signup / Login")
        this._verifyElementOnPageByName('a[href="/test_cases"]', "Test Cases")
        this._verifyElementOnPageByName('a[href="/api_list"]', "API Testing")
        this._verifyElementOnPageByName('a[href="https://www.youtube.com/c/AutomationExercise"]', "Video Tutorials")
        this._verifyElementOnPageByName('a[href="/contact_us"]', "Contact us")
    }

    _verifyProductCard() {
        this._verifyElementOnPage('div[class="product-image-wrapper"]')
        this._verifyElementOnPage('div[class="product-image-wrapper"]')
        this._verifyElementOnPageByName('a[class="btn btn-default add-to-cart"]', "Add to cart")
        this._verifyElementOnPageByName('div[class="choose"]', "View Product")
    }
    _verifyCattegoryCard() {
        this._verifyElementOnPageByName('h2', "Category")
        this._verifyLocatorWhichContainsELement('[class="panel-group category-products"]', "Women")
        this._verifyLocatorWhichContainsELement('[class="panel-group category-products"]', "Men")
        this._verifyLocatorWhichContainsELement('[class="panel-group category-products"]', "Kids")
    }
    _verifyBrandCard() {
        this._verifyElementOnPageByName('h2', "Brands")
        this._verifyLocatorWhichContainsELement('[class="brands_products"]', "Polo")
        this._verifyLocatorWhichContainsELement('[class="brands_products"]', "H&M")
        this._verifyLocatorWhichContainsELement('[class="brands_products"]', "Mast & Harbour")
        this._verifyLocatorWhichContainsELement('[class="brands_products"]', "Babyhug")
        this._verifyLocatorWhichContainsELement('[class="brands_products"]', "Allen Solly Junior")
        this._verifyLocatorWhichContainsELement('[class="brands_products"]', "Kookie Kids")
        this._verifyLocatorWhichContainsELement('[class="brands_products"]', "Biba")
    }

    _verifyAlertMessage(message) {
        this._verifyLocatorWhichContainsELement('p[style="color: red;"]', message)
    }

    _verifyElementWasRemovedFromCart(locator) {
        cy.get(locator).should('not.exist')
    }
}

export default new ElementVerification