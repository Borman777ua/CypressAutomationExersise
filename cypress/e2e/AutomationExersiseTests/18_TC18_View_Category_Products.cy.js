/*
Test Case 18: View Category Products
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that categories are visible on left side bar
4. Click on 'Women' category
5. Click on any category link under 'Women' category, for example: Dress
6. Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
7. On left side bar, click on any sub-category link of 'Men' category
8. Verify that user is navigated to that category page
*/

import HomePage from "../../support/AutomationExersisePageObject/HomePage"
import navigation from "../../support/AutomationExersisePageObject/navigation"


describe("Test Case 18: View Category Products", () => {
    before(() => {
        cy.visit("/")
        HomePage._verifyHomePage()
    })


    it("Test Case 18: View Category Products", () => {
        navigation._selectCattegory('Women', "Dress", "1")
    })
})