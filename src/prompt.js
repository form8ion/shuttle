import {prompt} from '@form8ion/overridable-prompts';
import {questionNames} from '@form8ion/core';

export default function ({decisions}) {
  return prompt([{
    name: questionNames.PROJECT_NAME,
    message: 'What should the project be renamed to?'
  }], decisions);
}
