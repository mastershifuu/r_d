Feature: API tests

  Scenario: Sent get request to get space tags
    When Sent request to get space tags
    Then Check that status code is 200

  Scenario Outline: Sent post request to create space tags
    When Create space tag from file <file>
    Then Check that status code is <status>
    Examples:
      |file                            |  status  |
      |  create_space_tag.json         |   200    |
      |  invalid_space_tag.json        |   400    |

  Scenario: Sent put request to update space tags
    When Update space tag from file create_space_tag.json
    Then Check that status code is 200

  Scenario: Sent post request to add tag to task
    When Add tag to task
    Then Check that status code is 200

  Scenario: Sent delete request to remove tag from task
    When Remove tag from task
    Then Check that status code is 200

  Scenario: Sent delete request to remove space tag
    When Delete space tag from file create_space_tag.json
    Then Check that status code is 200