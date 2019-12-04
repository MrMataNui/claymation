Feature: Go to the sculpture page

  Scenario: Sculpture Page
    Given I am on the sculpture page
    When I do nothing
    Then the year should be 2019
			And 2019jan should be selected
