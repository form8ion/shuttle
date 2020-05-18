// eslint-disable-next-line import/no-extraneous-dependencies,import/no-unresolved
import {shuttle} from '@form8ion/shuttle';
import {When} from 'cucumber';

When('the project is shuttled to a new location', async function () {
  await shuttle();
});
