import elementVerification from "./elementVerification";
import navigation from "./navigation";

const name = Cypress.env("testName")
const email = Cypress.env("testEmail")
const subject = "Subject"
const message = "Lorem Ipsum"
const successMessageText = "Success! Your details have been submitted successfully."

class ContactUsForm {

    _sendMessage() {
        this._verifyElementsOnContactUsPage()
        this._inputContactMessageValues()
        this._submitMessage()
        elementVerification._verifyText('[class="status alert alert-success"]', successMessageText)
    }

    _inputContactMessageValues() {
        navigation._typeValues('[data-qa="name"]', name)
        navigation._typeValues('[data-qa="email"]', email)
        navigation._typeValues('[data-qa="subject"]', subject)
        navigation._typeValues('[data-qa="message"]', message)
        this._uploadFile("jpg test.jpg")
    }
    _verifyElementsOnContactUsPage() {
        elementVerification._verifyLocatorWhichContainsELement('h2', "Get In Touch")
    }
    _submitMessage() {
        navigation._clickOnElement('input[data-qa="submit-button"]')
    }


    _uploadFile(filename) {
        cy.get('input[type=file]').selectFile(`cypress/fixtures/Test items/${filename}`, { force: true });
    }
}

export default new ContactUsForm