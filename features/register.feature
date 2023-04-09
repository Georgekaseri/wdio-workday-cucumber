Feature: New user registration

  Scenario Outline: As a new user, I want to be able to register for an account so that I can   
    access

    Given I am on the login page
    When I go through the registration process with <username> , <password> and <verifyPassword>
    Then I should see a welcome message saying <message>

    Examples:
      | username        | password    |verifyPassword|  message                 |
      | geo22@gmail.com | Hyderabad85@|Hyderabad85@  | Welcome to Candidate Home|
