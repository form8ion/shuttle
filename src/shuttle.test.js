
import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import any from '@travi/any';

import shuttleDocumentation from './documentation.js';
import shuttle from './shuttle.js';

vi.mock('./documentation.js');

describe('shuttle', () => {
  const originalProcessCwd = process.cwd;

  beforeEach(() => {
    process.cwd = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();

    process.cwd = originalProcessCwd;
  });

  it('should shuttle the project between accounts', async () => {
    const projectRoot = any.string();
    process.cwd.mockReturnValue(projectRoot);

    await shuttle();

    expect(shuttleDocumentation).toHaveBeenCalledWith({projectRoot});
  });
});
