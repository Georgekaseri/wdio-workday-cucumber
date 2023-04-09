Feature: Job Search
  As a registered user, I want to be able to search for job vacancies so that I can apply for a 
  job

  Background:
    Given I am a registered user
    And I login with <username> and <password>

  @jobsearch
  Scenario: Search for job by keyword
    Given I am on the job search page
    When I enter a job keyword <keyword> in the search bar
    And I click the Distance Or location dropdown
    Then I should see a list of job vacancies related to the keyword "Software Engineer"

     Examples:
      | username                        | password     | message            | keyword |
      | georgekaseri22@gmail.com        | Hyderabad85@ | Careers at Workday |Sr Software Development Engineer in Test (SDET) |

  @jobsearch
  Scenario: Filter job search results
    Given I am on the job search page
    When I enter a job keyword "Software Engineer" in the search bar
    And I filter job results by "location" and select "New York"
    Then I should see a list of job vacancies related to the keyword "Software Engineer" in "New York"

  @jobsearch
  Scenario: Sort job search results by date
    Given I am on the job search page
    When I enter a job keyword "Software Engineer" in the search bar
    And I sort job results by "date posted" in "ascending" order
    Then I should see a list of job vacancies related to the keyword "Software Engineer" sorted by date posted in ascending order


    Examples:
      | username        | password    |verifyPassword|  message                 |
      | geo22@gmail.com | Hyderabad85@|Hyderabad85@  | Welcome to Candidate Home|
