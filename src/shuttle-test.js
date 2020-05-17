import any from '@travi/any';
import sinon from 'sinon';
import {assert} from 'chai';
import * as documentation from './documentation';
import shuttle from './shuttle';

suite('shuttle', () => {
  let sandbox;
  const projectRoot = any.string();

  setup(() => {
    sandbox = sinon.createSandbox();

    sandbox.stub(documentation, 'default');
  });

  teardown(() => sandbox.restore());

  test('that the project is shuttled between accounts', async () => {
    await shuttle({projectRoot});

    assert.calledWith(documentation.default, {projectRoot});
  });
});
