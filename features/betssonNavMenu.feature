@navMenu
Feature: Navigation Menu

  Background: Navigation
    Given logged into the site Betsson

  Scenario: Navigation Menu Betsson
    When I click on Panel
    Then I should see Panel informations
    When I click on Tournaments
    Then I should see Tournaments informations
    When I click on Tickets
    Then I should see Tickets informations
    When I click on Live
    Then I should see Live informations