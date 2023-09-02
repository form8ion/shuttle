Feature: Documentation

  Scenario: new project name
    Given the current project name is "foo"
    And the project should be renamed to "bar"
    When the project is shuttled to a new location
    Then the readme title is updated to "bar"
