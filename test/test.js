import test from 'ava';

const { a1Notation } = require('..');

test('A1 to r:c', t => {
  t.deepEqual(a1Notation('B7'), { r: 6, c: 1 });
  t.deepEqual(a1Notation('B7', true), { r: 7, c: 2 });
  t.deepEqual(a1Notation('AB12'), { r: 11, c: 27 });
  t.deepEqual(a1Notation('AB12', true), { r: 12, c: 28 });
});

test('r:c to A1', t => {
  t.deepEqual(a1Notation(6, 1), 'B7');
  t.deepEqual(a1Notation(7, 2, true), 'B7');
  t.deepEqual(a1Notation(11, 27), 'AB12');
  t.deepEqual(a1Notation(12, 28, true), 'AB12');
});
