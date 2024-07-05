import CartPage from "../../support/AutomationExersisePageObject/CartPage"
import HomePage from "../../support/AutomationExersisePageObject/HomePage"
import ProductsPage from "../../support/AutomationExersisePageObject/ProductsPage"
import navigation from "../../support/AutomationExersisePageObject/navigation"

/*
Test Case 13: Verify Product quantity in Cart
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'View Product' for any product on home page
5. Verify product detail is opened
6. Increase quantity to 4
7. Click 'Add to cart' button
8. Click 'View Cart' button
9. Verify that product is displayed in cart page with exact quantity
*/
before(() => {
    cy.visit("/")
    HomePage._verifyHomePage()
})

it("Test Case 13: Verify Product quantity in Cart", () => {
    navigation._navigationToProducts()
    ProductsPage._selectProduct("1")
    ProductsPage._changeQuantityOnProductDetails("4")
    ProductsPage._addProductToCartOnProductDetails()
    ProductsPage._continueShopping()
    navigation._navigationToCart()
    CartPage._verifyProductOnTable(1, "Blue Top", "Rs. 500", "4", "Rs. 2000")
})