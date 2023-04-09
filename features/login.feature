Feature: Login with valid credentials

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password> 
    Then I should see welcome saying <message>

    Examples:
      | username                        | password     | message            |
      | georgekaseri22@gmail.com        | Hyderabad85@ | Careers at Workday |

  Scenario Outline: As a user, I verify the contents of Workday
  When I see the contents of the Workday saying <banner>
  Then I should verify each contents of the Workday <logo>,<button1>,<button2>,<button3> and <button4>

  Examples:
  |banner|logo |button1     | button2         | button3      | button4   |
  |true  |true |Careers Page| Search for Jobs |Candidate Home| Job Alerts|
  

