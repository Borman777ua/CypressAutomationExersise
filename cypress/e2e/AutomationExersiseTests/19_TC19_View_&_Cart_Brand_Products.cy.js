/*
Test Case 19: View & Cart Brand Products
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Click on 'Products' button
4. Verify that Brands are visible on left side bar
5. Click on any brand name
6. Verify that user is navigated to brand page and brand products are displayed
7. On left side bar, click on any other brand link
8. Verify that user is navigated to that brand page and can see products
*/

import ProductsPage from "../../support/AutomationExersisePageObject/ProductsPage"
import navigation from "../../support/AutomationExersisePageObject/navigation"


describe("Test Case 19: View & Cart Brand Products", () => {
    before(() => {
        cy.visit("/")
    })
    it("Test Case 19: View & Cart Brand Products", () => {
        navigation._navigationToProducts()
        navigation._selectBrand("Polo")
        ProductsPage._verifySearchedItems()
        navigation._selectBrand("Madame")
        ProductsPage._verifySearchedItems()
    })
})