@Login
Feature: Login Betsson

  Background: Navigation
    Given Go to the Betsson website
    
  Scenario: Login
    When I type 'fernandes007' in email
    And I type 'F3rnandes@' in password
    And I click on enter
    Then I should see Access your account

