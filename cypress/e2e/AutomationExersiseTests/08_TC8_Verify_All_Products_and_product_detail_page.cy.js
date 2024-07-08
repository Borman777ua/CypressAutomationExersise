/*
Test Case 8: Verify All Products and product detail page
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Products' button
5. Verify user is navigated to ALL PRODUCTS page successfully
6. The products list is visible
7. Click on 'View Product' of first product
8. User is landed to product detail page
9. Verify that detail detail is visible: product name, category, price, availability, condition, brand
*/

import HomePage from "../../support/AutomationExersisePageObject/HomePage"
import ProductsPage from "../../support/AutomationExersisePageObject/ProductsPage"
import navigation from "../../support/AutomationExersisePageObject/navigation"


describe("Test Case 8: Verify All Products and product detail page", () => {

    before(() => {
        cy.visit("/")
        HomePage._verifyHomePage()
    })

    it("Test Case 8: Verify All Products and product detail page", () => {
        let productInformation = ["Blue Top",
            "Category: Women > Tops",
            "Rs. 500",
            "Availability: In Stock",
            "Condition: New",
            "Brand: Polo"]
        navigation._navigationToProducts()
        ProductsPage._verifyAllProducts()
        ProductsPage._selectProduct("1")
        ProductsPage._verifyProductDetails(
            productInformation[0],
            productInformation[1],
            productInformation[2],
            productInformation[3],
            productInformation[4],
            productInformation[5])
    })
})