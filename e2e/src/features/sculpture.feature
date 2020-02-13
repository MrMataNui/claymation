Feature: Go to the sculpture page
  Scenario: Sculpture Page
    Given I am on the sculptures page
    When I do nothing
    Then the year should be 2019
			And January should be selected
    When March is clicked on
    Then March should be selected
    When May is clicked on
    Then May should be selected
    When August is clicked on
    Then August should be selected
    When November is clicked on
    Then November should be selected
