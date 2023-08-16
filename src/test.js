const { sum } = require('./index');
const { product } = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('multiplies 4 * 2 to equal 8', () => {
  expect(product(4, 2)).toBe(8);
});
