Feature: frontend

    Scenario: Sign In
        Given I am in the sign in page
        When I fill username with "username"
        And I fill password with "password"
        And I fill repassword with "password"
        And I click on submit
        Then I should see a new user created successfully