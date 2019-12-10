Feature: Go to the home
  Scenario: Home Page
    Given I am on the home page
    When I do nothing
    Then I should see the title
			And the navbar should have 7 links
