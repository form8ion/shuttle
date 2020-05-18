import fs from 'fs';
import sinon from 'sinon';
import {assert} from 'chai';
import any from '@travi/any';
import * as remark from '../thirdparty-wrappers/remark';
import {settings} from '../.remarkrc';
import shuttleDocumentation from './documentation';

suite('documentation', () => {
  let sandbox, process;
  const badges = any.simpleObject();

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(remark, 'default');
    sandbox.stub(fs, 'readFileSync');
    sandbox.stub(fs, 'writeFileSync');

    const data = sinon.stub();
    process = sinon.stub();
    remark.default.returns({data});
    data.withArgs('settings', settings).returns({process});
  });

  teardown(() => sandbox.restore());

  test('that the readme is updated', async () => {
    const projectRoot = any.string();
    const pathToReadmeFile = `${projectRoot}/README.md`;
    const existingFileContents = any.string();
    const updatedFileContents = any.string();
    process.withArgs(existingFileContents).yields(null, updatedFileContents);
    fs.readFileSync.withArgs(pathToReadmeFile, 'utf8').returns(existingFileContents);

    await shuttleDocumentation({projectRoot, results: {badges}});

    assert.calledWith(fs.writeFileSync, pathToReadmeFile, updatedFileContents);
  });

  test('that a processing failure rejects the promise', async () => {
    const error = new Error('from test');
    process.yields(error);

    try {
      await shuttleDocumentation({results: {badges}});

      throw new Error('Calling the lifter should have thrown an error in this test');
    } catch (err) {
      assert.equal(err, error);
      assert.notCalled(fs.writeFileSync);
    }
  });
});
