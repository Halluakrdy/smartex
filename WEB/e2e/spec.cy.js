/// <reference types="cypress" />

import Signin from "../fixtures/signin"
import Login from "../fixtures/login"
import Wronglogin from "../fixtures/wronglogin"

describe('Web Front validation', () => {
  it ('Sign in Sucess', function () {
    const signinpage = new Signin();
    signinpage.navigate();
    cy.get('h3 > a').click()
    signinpage.username('username');
    signinpage.password('password');
    signinpage.repassword('password');
    signinpage.submit();

    cy.get('#content > :nth-child(1)').should('contain', 'You have been introduced to our database with the above informations:')
  })
  it ('Login Sucess', function (){
    const loginpage = new Login();
    loginpage.navigate();
    loginpage.username('test');
    loginpage.password('test');
    loginpage.submit();

    cy.get(':nth-child(2) > p').should('contain', 'On this page you can visualize or edit you user information.')
    
  })
  it ('Invalid login', function (){
    const wrongusernamepage = new Wronglogin();
    wrongusernamepage.navigate();
    wrongusernamepage.username('test');
    wrongusernamepage.password('test');
    wrongusernamepage.submit();

    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')

  })
  it ('Blank login - username missing', function (){
    const blankpage = new Wronglogin();
    blankpage.navigate();
    blankpage.password('test');
    blankpage.submit();

    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required')

  })
  it ('Blank login - password missing', function (){
    const blankpage = new Wronglogin();
    blankpage.navigate();
    blankpage.username('test');
    blankpage.submit();

    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Password is required')

  })
})