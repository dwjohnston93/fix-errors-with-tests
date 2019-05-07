const returnName = require('../01-lesson');

test("function should return 'pedro'" , () => {
  expect(returnName()).toMatch(/pedro/);
})