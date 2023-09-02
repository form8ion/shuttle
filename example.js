// #### Import
// remark-usage-ignore-next
import stubbedFs from 'mock-fs';
import {shuttle} from './lib/index.js';

// #### Execute

// remark-usage-ignore-next 3
(async () => {
  stubbedFs({'README.md': ''});

  await shuttle();
  // remark-usage-ignore-next 2
  stubbedFs.restore();
})();
