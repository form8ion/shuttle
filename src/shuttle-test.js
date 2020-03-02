import shuttle from './shuttle';

suite('shuttle', () => {
  test('that the project is shuttled between accounts', async () => {
    await shuttle();
  });
});
