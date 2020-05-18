import fs from 'fs';
import {info} from '@travi/cli-messages';
import * as remarkConfig from '../.remarkrc';
import remark from '../thirdparty-wrappers/remark';

export default function ({projectRoot}) {
  info('Shuttling Documentation');

  const pathToReadme = `${projectRoot}/README.md`;

  return new Promise((resolve, reject) => {
    remark()
      .data('settings', remarkConfig.settings)
      .process(fs.readFileSync(pathToReadme, 'utf8'), (err, file) => {
        if (err) reject(err);
        else {
          fs.writeFileSync(pathToReadme, file);
          resolve();
        }
      });
  });
}
