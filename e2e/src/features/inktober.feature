Feature: Go to the inktober page
  Scenario: Inktober Page
    Given I am on the inktober page
    When I do nothing
    Then I should see the header
			And there should be 3 weeks
			And there should be 21 days
    When I click on day 1
		Then day 1's image should be displayed
    When I click on day 2
		Then day 2's image should be displayed
    When I click on day 3
		Then day 3's image should be displayed
    When I click on day 4
		Then day 4's image should be displayed
