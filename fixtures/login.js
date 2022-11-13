class Login {
    navigate(){
        cy.visit('http://testphp.vulnweb.com/login.php')
    }
    username(login) {
        cy.get(':nth-child(1) > :nth-child(2) > input')
            .clear()
            .type(login);
            return this
    }
    password(login){
        cy.get(':nth-child(2) > :nth-child(2) > input')
            .clear()
            .type(login)
            return this
    }
    submit(){
        cy.get(':nth-child(3) > td > input').click()
    }
}
    export default Login