import fs from 'fs';
import remark from 'remark';
import {info} from '@travi/cli-messages';

import * as remarkConfig from '../.remarkrc.cjs';

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
