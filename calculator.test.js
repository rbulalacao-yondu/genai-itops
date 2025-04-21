const { add } = require('./calculator');

test('adds 1 + 2 to equal 4', () => {
  // <-- Intentional mistake: add(1,2) === 3, so this will fail
  expect(add(1, 2)).toBe(4);
});
