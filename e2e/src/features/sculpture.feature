Feature: Go to the sculpture page
  Scenario: Sculpture Page
    Given I am on the sculptures page
    When I do nothing
    Then the year should be 2019
			And "2019jan" should be selected
    When "#2019mar" is clicked on
    Then "2019mar" should be selected
