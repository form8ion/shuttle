import shuttleDocumentation from './documentation';

export default async function () {
  await shuttleDocumentation({projectRoot: process.cwd()});
}
