
/*
Test Case 20: Search Products and Verify Cart After Login
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Click on 'Products' button
4. Verify user is navigated to ALL PRODUCTS page successfully
5. Enter product name in search input and click search button
6. Verify 'SEARCHED PRODUCTS' is visible
7. Verify all the products related to search are visible
8. Add those products to cart
9. Click 'Cart' button and verify that products are visible in cart
10. Click 'Signup / Login' button and submit login details
11. Again, go to Cart page
12. Verify that those products are visible in cart after login as well
*/

import CartPage from "../../support/AutomationExersisePageObject/CartPage"
import ProductsPage from "../../support/AutomationExersisePageObject/ProductsPage"
import SignUpPage from "../../support/AutomationExersisePageObject/SignUpPage"
import navigation from "../../support/AutomationExersisePageObject/navigation"



const email = Cypress.env("testEmail")
let password = Cypress.env("testPassword")

describe("Test Case 20: Search Products and Verify Cart After Login", () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it("Pre Condition:Register User", () => {
        cy.visit('/')
        cy.registerUser(email);
    })
    it("Test Case 20: Search Products and Verify Cart After Login", () => {
        let value = "Tshirt"
        navigation._navigationToProducts()
        ProductsPage._verifyAllProducts()
        ProductsPage._searchProduct(value)
        ProductsPage._addProductToCart("2")
        ProductsPage._addProductToCart("28")
        ProductsPage._addProductToCart("29")
        ProductsPage._addProductToCart("30")
        ProductsPage._addProductToCart("31")
        ProductsPage._addProductToCart("43")
        navigation._navigationToCart()
        CartPage._verifyProductOnTable("2", "Men Tshirt", "Rs. 400", "1", "Rs. 400")
        CartPage._verifyProductOnTable("28", "Pure Cotton V-Neck T-Shirt", "Rs. 1299", "1", "Rs. 1299")
        CartPage._verifyProductOnTable("29", "Green Side Placket Detail T-Shirt", "Rs. 1000", "1", "Rs. 1000")
        CartPage._verifyProductOnTable("30", "Premium Polo T-Shirts", "Rs. 1500", "1", "Rs. 1500")
        CartPage._verifyProductOnTable("31", "Pure Cotton Neon Green Tshirt", "Rs. 850", "1", "Rs. 850")
        CartPage._verifyProductOnTable("43", "GRAPHIC DESIGN MEN T SHIRT - BLUE", "Rs. 1389", "1", "Rs. 1389")
        navigation._navigationToSignUpLogin()
        SignUpPage._executeLogIn(email, password)
        navigation._navigationToCart()
        CartPage._verifyProductOnTable("2", "Men Tshirt", "Rs. 400", "1", "Rs. 400")
        CartPage._verifyProductOnTable("28", "Pure Cotton V-Neck T-Shirt", "Rs. 1299", "1", "Rs. 1299")
        CartPage._verifyProductOnTable("29", "Green Side Placket Detail T-Shirt", "Rs. 1000", "1", "Rs. 1000")
        CartPage._verifyProductOnTable("30", "Premium Polo T-Shirts", "Rs. 1500", "1", "Rs. 1500")
        CartPage._verifyProductOnTable("31", "Pure Cotton Neon Green Tshirt", "Rs. 850", "1", "Rs. 850")
        CartPage._verifyProductOnTable("43", "GRAPHIC DESIGN MEN T SHIRT - BLUE", "Rs. 1389", "1", "Rs. 1389")

        SignUpPage._executeAccountDeletion()
    })
})