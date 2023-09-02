import {promises as fs} from 'node:fs';
// eslint-disable-next-line import/no-extraneous-dependencies,import/no-unresolved
import {shuttle} from '@form8ion/shuttle';

import {After, Before, When} from '@cucumber/cucumber';
import stubbedFs from 'mock-fs';
import {questionNames} from '@form8ion/core';

Before(function () {
  stubbedFs();
});

After(function () {
  stubbedFs.restore();
});

When('the project is shuttled to a new location', async function () {
  await fs.writeFile(`${process.cwd()}/README.md`, `# ${this.existingProjectName}`);

  await shuttle({decisions: {[questionNames.PROJECT_NAME]: this.updatedProjectName}});
});
