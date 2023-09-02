// eslint-disable-next-line import/no-extraneous-dependencies,import/no-unresolved
import {shuttle} from '@form8ion/shuttle';

import {After, Before, When} from '@cucumber/cucumber';
import stubbedFs from 'mock-fs';

Before(function () {
  stubbedFs({'README.md': '# foo'});
});

After(function () {
  stubbedFs.restore();
});

When('the project is shuttled to a new location', async function () {
  await shuttle();
});
