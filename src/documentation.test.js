import {promises as fs} from 'node:fs';
import {remark} from 'remark';

import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import any from '@travi/any';
import {when} from 'jest-when';

import remarkConfig from '../.remarkrc.js';
import shuttleDocumentation from './documentation.js';

vi.mock('node:fs');
vi.mock('remark');

describe('documentation', () => {
  let process;
  const badges = any.simpleObject();

  beforeEach(() => {
    const data = vi.fn();
    process = vi.fn();

    remark.mockReturnValue({data});
    when(data).calledWith('settings', remarkConfig.settings).mockReturnValue({process});
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should update the readme', async () => {
    const projectRoot = any.string();
    const pathToReadmeFile = `${projectRoot}/README.md`;
    const existingFileContents = any.string();
    const updatedFileContents = any.string();
    when(process).calledWith(existingFileContents).mockResolvedValue(updatedFileContents);
    when(fs.readFile).calledWith(pathToReadmeFile, 'utf8').mockReturnValue(existingFileContents);

    await shuttleDocumentation({projectRoot, results: {badges}});

    expect(fs.writeFile).toHaveBeenCalledWith(pathToReadmeFile, updatedFileContents);
  });

  it('should reject the promise for a processing error', async () => {
    const error = new Error('from test');
    process.mockImplementation(() => {
      throw error;
    });

    expect(() => shuttleDocumentation({results: {badges}})).rejects.toThrowError(error);
    expect(fs.writeFile).not.toHaveBeenCalled();
  });
});
