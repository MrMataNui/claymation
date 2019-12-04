Feature: Go to the inktober page

  Scenario: Inktober Page
    Given I am on the inktober page
    When I do nothing
    Then I should see the header
			And there should be 3 weeks
			And there should be 21 days
    When I click on day 1
		Then that day's image should be displayed
