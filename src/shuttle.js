import shuttleDocumentation from './documentation.js';

export default async function () {
  await shuttleDocumentation({projectRoot: process.cwd()});
}
