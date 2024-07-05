import elementVerification from "./elementVerification";
import navigation from "./navigation";


class ProcutsPage {

    _verifyAllProducts() {
        elementVerification._verifyLocatorWhichContainsELement('h2[class="title text-center"]', "All Products")
        elementVerification._verifyProductCard()
    }

    _selectProduct(productNumber) {
        navigation._clickOnElement(`a[href="/product_details/${productNumber}"]`);
    }
    _verifyProductDetails(productName, category, price, availability, condition, brand) {
        elementVerification._verifyLocatorWhichContainsELement('[class="product-information"]', productName)
        elementVerification._verifyLocatorWhichContainsELement('[class="product-information"]', category)
        elementVerification._verifyLocatorWhichContainsELement('[class="product-information"]', price)
        elementVerification._verifyLocatorWhichContainsELement('[class="product-information"]', availability)
        elementVerification._verifyLocatorWhichContainsELement('[class="product-information"]', condition)
        elementVerification._verifyLocatorWhichContainsELement('[class="product-information"]', brand)
    }

    _searchProduct(value) {
        navigation._typeValues('input[id="search_product"]', value)
        navigation._clickOnElement('button[id="submit_search"]')
        this._verifySearchedItems()
    }
    _verifySearchedItems() {
        cy.get('div[class="productinfo text-center"]').should('have.length.greaterThan', 0).then(elements => {
            const length = elements.length;
            cy.log(`Number of searched products:' ${length}`);
        })
    }

    _addProductToCart(productID) {
        navigation._clickOnElementByName(`a[data-product-id="${productID}"]`, "Add to cart")
        this._continueShopping()
    }

    _continueShopping() {
        navigation._clickOnElementByName('button', "Continue Shopping")
    }
    _addProductToCartOnProductDetails() {
        navigation._clickOnElementByName('button', "Add to cart")
    }

    _changeQuantityOnProductDetails(value) {
        cy.get('[name="quantity"]').clear()
        navigation._typeValues('[name="quantity"]', value)
    }

    _writeReview(name, email) {
        navigation._typeValues('[id="name"]', name)
        navigation._typeValues('[id="email"]', email)
        navigation._typeValues('[id="review"]', "Lorem ipsum")
        navigation._clickOnElement('[id="button-review"]')
        elementVerification._verifyLocatorWhichContainsELement('[class="alert-success alert"]', "Thank you for your review.")
    }
}
export default new ProcutsPage