import {questionNames} from '@form8ion/core';

import promptForUpdates from './prompt.js';
import shuttleDocumentation from './documentation.js';

export default async function ({decisions} = {}) {
  const {[questionNames.PROJECT_NAME]: projectName} = await promptForUpdates({decisions});

  await shuttleDocumentation({projectRoot: process.cwd(), projectName});
}
