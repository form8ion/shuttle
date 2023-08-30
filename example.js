// #### Import
// remark-usage-ignore-next 2
import fs from 'fs';
import stubbedFs from 'mock-fs';
import {shuttle} from './lib';

// #### Execute

// remark-usage-ignore-next 6
(async () => {
  stubbedFs({
    'README.md': '',
    '.remarkrc.cjs': await fs.readFile('.remarkrc.cjs')
  });

  await shuttle();
  // remark-usage-ignore-next 2
  stubbedFs.restore();
})();
