import {Given} from '@cucumber/cucumber';

Given('the current project name is {string}', async function (existingProjectName) {
  this.existingProjectName = existingProjectName;
});

Given('the project should be renamed to {string}', async function (updatedProjectName) {
  this.updatedProjectName = updatedProjectName;
});
