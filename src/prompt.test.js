import {questionNames} from '@form8ion/core';
import {prompt} from '@form8ion/overridable-prompts';

import {afterEach, describe, expect, it, vi} from 'vitest';
import any from '@travi/any';
import {when} from 'jest-when';

import promptForUpdates from './prompt.js';

vi.mock('@form8ion/overridable-prompts');

describe('prompt', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should prompt for the new project name', async () => {
    const answers = any.simpleObject();
    const decisions = any.simpleObject();

    when(prompt)
      .calledWith([{
        name: questionNames.PROJECT_NAME,
        message: 'What should the project be renamed to?'
      }], decisions)
      .mockResolvedValue(answers);

    expect(await promptForUpdates({decisions})).toEqual(answers);
  });
});
