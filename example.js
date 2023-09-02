// #### Import
// remark-usage-ignore-next 2
import stubbedFs from 'mock-fs';
import {questionNames} from '@form8ion/core';
import {shuttle} from './lib/index.js';

// #### Execute

// remark-usage-ignore-next 3
(async () => {
  stubbedFs({'README.md': ''});

  await shuttle({decisions: {[questionNames.PROJECT_NAME]: 'new-project-name'}});
  // remark-usage-ignore-next 2
  stubbedFs.restore();
})();
