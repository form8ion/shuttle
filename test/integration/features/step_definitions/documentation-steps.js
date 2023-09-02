import {promises as fs} from 'node:fs';

import {fromMarkdown as parse} from 'mdast-util-from-markdown';
import {Then} from '@cucumber/cucumber';
import {assert} from 'chai';

function assertTitleIsIncluded(readmeTree, projectName) {
  const title = readmeTree.children[0];
  const titleText = title.children[0];

  assert.equal(title.type, 'heading');
  assert.equal(title.depth, 1);
  assert.equal(titleText.type, 'text');
  assert.equal(titleText.value, projectName);
}


Then('the readme title is updated', async function () {
  const readmeTree = parse(await fs.readFile(`${process.cwd()}/README.md`, 'utf8'));

  assertTitleIsIncluded(readmeTree, 'baz');
});
