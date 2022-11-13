const URL = 'http://testphp.vulnweb.com/login.php'
const USERNAME_INPUT = ':nth-child(1) > :nth-child(2) > input'
const PASSWORD_INPUT = ':nth-child(2) > :nth-child(2) > input'
const REPASSWORD_INPUT = ':nth-child(3) > :nth-child(2) > input'
const SUBMIT_BUTTON = ':nth-child(9) > td > input'

class SignIn {
    static visitLoginPage() {
        cy.visit(URL)
    }
    static fillUsername(){
        cy.get(USERNAME_INPUT).type(username)
    }
    static fillPassword(){
        cy.get(PASSWORD_INPUT).type(password)
    }
    static fillRepassword(){
        cy.get(REPASSWORD_INPUT).type(password)
    }
    static submit(){
        cy.get(SUBMIT_BUTTON).click()
    }
}

export default SignIn