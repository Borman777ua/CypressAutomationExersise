/// <reference types="cypress" />
import HomePage from "../../support/AutomationExersisePageObject/HomePage"



describe("Visit test Page", () => {
    it("Visit base Url", () => {
        cy.visit("/")
        cy.url().should('contain', ("/"))
        HomePage._verifyHomePage()
    })

})
