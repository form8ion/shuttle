import fs from 'node:fs';
import {remark} from 'remark';
import {info} from '@travi/cli-messages';

import remarkConfig from '../.remarkrc.js';

export default function ({projectRoot}) {
  info('Shuttling Documentation');

  const pathToReadme = `${projectRoot}/README.md`;

  return new Promise((resolve, reject) => {
    remark()
      .data('settings', remarkConfig.settings)
      .process(fs.readFileSync(pathToReadme, 'utf8'), (err, file) => {
        if (err) reject(err);
        else {
          fs.writeFileSync(pathToReadme, `${file}`);
          resolve();
        }
      });
  });
}
