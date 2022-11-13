import {Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import SignIn from './frontendPage.cy'

Given('I am in the sign in page', () => {
    SignIn.visitLoginPage()
})
When('I fill username with {string}', username => {
    SignIn.fillUsername(username)
})
When('I fill password with {string}', password => {
    SignIn.fillPassword(password)
})
When('I fill repassword with {string}', password => {
    SignIn.fillRepassword(password)
})
When('I click on submit', () => {
    SignIn.submit()
})
Then('I should see a new user created successfully', () => {
    cy.get('#content > :nth-child(1)').should('contain', 'You have been introduced to our database with the above informations:')
})