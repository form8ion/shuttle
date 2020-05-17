// #### Import
// remark-usage-ignore-next
import stubbedFs from 'mock-fs';
import {shuttle} from './lib/index.cjs';

// remark-usage-ignore-next
stubbedFs();

// #### Execute

(async () => {
  await shuttle({projectRoot: process.cwd()});
  // remark-usage-ignore-next
  stubbedFs.restore();
})();
