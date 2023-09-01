import fs from 'fs';
import remark from 'remark';

import {afterEach, beforeEach, describe, expect, it, vi} from 'vitest';
import any from '@travi/any';
import {when} from 'jest-when';

import {settings} from '../.remarkrc.cjs';
import shuttleDocumentation from './documentation';

vi.mock('fs');
vi.mock('remark');

describe('documentation', () => {
  let process;
  const badges = any.simpleObject();

  beforeEach(() => {
    const data = vi.fn();
    process = vi.fn();

    remark.mockReturnValue({data});
    when(data).calledWith('settings', settings).mockReturnValue({process});
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should update the readme', async () => {
    const projectRoot = any.string();
    const pathToReadmeFile = `${projectRoot}/README.md`;
    const existingFileContents = any.string();
    const updatedFileContents = any.string();
    process.mockImplementation((fileContents, callback) => {
      if (fileContents === existingFileContents) {
        callback(null, updatedFileContents);
      }
    });
    when(fs.readFileSync).calledWith(pathToReadmeFile, 'utf8').mockReturnValue(existingFileContents);

    await shuttleDocumentation({projectRoot, results: {badges}});

    expect(fs.writeFileSync).toHaveBeenCalledWith(pathToReadmeFile, updatedFileContents);
  });

  it('should reject the promise for a processing error', async () => {
    const error = new Error('from test');
    process.mockImplementation((_, callback) => {
      callback(error);
    });

    expect(() => shuttleDocumentation({results: {badges}})).rejects.toThrowError(error);
    expect(fs.writeFileSync).not.toHaveBeenCalled();
  });
});
