import {promises as fs} from 'node:fs';
import {remark} from 'remark';
import {info} from '@travi/cli-messages';

import remarkConfig from '../.remarkrc.js';
import headingUpdater from './heading-updater.js';

export default async function ({projectRoot}) {
  info('Shuttling Documentation');

  const pathToReadme = `${projectRoot}/README.md`;

  const resultingContent = await remark()
    .data('settings', remarkConfig.settings)
    .use(headingUpdater, 'baz')
    .process(await fs.readFile(pathToReadme, 'utf8'));

  await fs.writeFile(pathToReadme, `${resultingContent}`);
}
