import {questionNames} from '@form8ion/core';

import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import any from '@travi/any';
import {when} from 'jest-when';

import promptForUpdates from './prompt.js';
import shuttleDocumentation from './documentation.js';
import shuttle from './shuttle.js';

vi.mock('./prompt.js');
vi.mock('./documentation.js');

describe('shuttle', () => {
  const projectRoot = any.string();
  const projectName = any.word();
  const originalProcessCwd = process.cwd;
  const answers = {...any.simpleObject(), [questionNames.PROJECT_NAME]: projectName};

  beforeEach(() => {
    process.cwd = vi.fn();

    process.cwd.mockReturnValue(projectRoot);
  });

  afterEach(() => {
    vi.clearAllMocks();

    process.cwd = originalProcessCwd;
  });

  it('should shuttle the project between accounts', async () => {
    when(promptForUpdates).calledWith({}).mockResolvedValue(answers);

    await shuttle();

    expect(shuttleDocumentation).toHaveBeenCalledWith({projectRoot, projectName});
  });

  it('should pass decisions to the prompt, when provided', async () => {
    const decisions = any.simpleObject();
    when(promptForUpdates).calledWith({}).mockResolvedValue(null);
    when(promptForUpdates).calledWith({decisions}).mockResolvedValue(answers);

    await shuttle({decisions});

    expect(shuttleDocumentation).toHaveBeenCalledWith({projectRoot, projectName});
  });
});
