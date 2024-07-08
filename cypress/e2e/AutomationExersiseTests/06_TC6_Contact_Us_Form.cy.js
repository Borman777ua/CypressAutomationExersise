/*
Test Case 6: Contact Us Form
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Contact Us' button
5. Verify 'GET IN TOUCH' is visible
6. Enter name, email, subject and message
7. Upload file
8. Click 'Submit' button
9. Click OK button
10. Verify success message 'Success! Your details have been submitted successfully.' is visible
11. Click 'Home' button and verify that landed to home page successfully
*/

import ContactUsForm from "../../support/AutomationExersisePageObject/ContactUsForm"
import HomePage from "../../support/AutomationExersisePageObject/HomePage"
import navigation from "../../support/AutomationExersisePageObject/navigation"

before(() => {
    cy.visit("/")
    HomePage._verifyHomePage()
})


describe("Test Case 6: Contact Us Form", () => {
    it("Test Case 6: Contact Us Form", () => {
        navigation._navigationToContactUs()
        ContactUsForm._sendMessage()

    })
})