
import navigation from "../../support/AutomationExersisePageObject/navigation";


describe("Verify navigation on page", () => {

    beforeEach(() => {
        cy.visit('/')
    })


    it("Navigation to Products", () => {
        navigation._navigationToProducts()
    })
    it("Navigation to Home Page", () => {
        navigation._navigationToProducts()
        navigation._navigationToHomePage()
    })
    it("Navigation to Cart", () => {
        navigation._navigationToCart()
    })
    it("Navigation to Sign up and Login", () => {
        navigation._navigationToSignUpLogin()
    })
    it("Navigation to Test Cases", () => {
        navigation._navigationToTestCases()
    })
    it("Navigation to Api List", () => {
        navigation._navigationToApiTesting()
    })
    it("Navigation to Contact us", () => {
        navigation._navigationToContactUs()
    })
    it("Navigation to Video and Tutorials", () => {
        navigation._navigationToVideoTutorials()
    })
})