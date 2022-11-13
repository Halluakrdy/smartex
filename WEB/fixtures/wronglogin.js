class Wronglogin {
    navigate(){
        cy.visit('https://www.saucedemo.com/')
    }
    username(wlogin) {
        cy.get('[data-test="username"]')
            .clear()
            .type(wlogin);
            return this
    }
    password(wlogin){
        cy.get('[data-test="password"]')
            .clear()
            .type(wlogin)
            return this
    }
    submit(){
        cy.get('[data-test="login-button"]').click()
    }
}
    export default Wronglogin