const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber with SUM', () => {
  it('adds', () => {
    assert.equal(calculateNumber('SUM', 0.3, 5), 5);
    assert.equal(calculateNumber('SUM', 8.9, 0), 9);
    assert.equal(calculateNumber('SUM', 12.656, 3), 16);
  });
});

describe('calculateNumber with SUBTRACT', () => {
  it('subtracts', () => {
    assert.equal(calculateNumber('SUBTRACT', 5, 0.3), 5);
    assert.equal(calculateNumber('SUBTRACT', 0, 8.97), -9);
    assert.equal(calculateNumber('SUBTRACT', 3, 12.656), -10);
  });
});

describe('calculateNumber with DIVIDE', () => {
  it('divides', () => {
    assert.equal(calculateNumber('DIVIDE', 1.2, 4.3), 0.25);
    assert.equal(calculateNumber('DIVIDE', 1.5, 2.4), 1);
    assert.equal(calculateNumber('DIVIDE', 1.2, 0.3), 'Error');
    assert.equal(calculateNumber('DIVIDE', 5.8, 2.9), 2);
  });
});
