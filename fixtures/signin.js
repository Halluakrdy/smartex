class Signin {
    navigate(){
        cy.visit('http://testphp.vulnweb.com/login.php')
    }
    username(signin) {
        cy.get(':nth-child(1) > :nth-child(2) > input')
            .clear()
            .type(signin);
            return this
        }
    password(signin){
        cy.get(':nth-child(2) > :nth-child(2) > input')
            .clear()
            .type(signin)
            return this
        }
    repassword(signin){
        cy.get(':nth-child(3) > :nth-child(2) > input')
            .clear()
            .type(signin)
            return this
        }
    submit(){
        cy.get(':nth-child(9) > td > input').click()
    }
    
}
    export default Signin