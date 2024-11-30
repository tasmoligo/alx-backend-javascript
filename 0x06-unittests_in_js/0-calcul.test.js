const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('round a only', () => {
    assert.equal(calculateNumber(0.3, 5), 5);
    assert.equal(calculateNumber(8.9, 0), 9);
    assert.equal(calculateNumber(12.656, 3), 16);
  });

  it('round b only', () => {
    assert.equal(calculateNumber(5, 0.3), 5);
    assert.equal(calculateNumber(0, 8.97), 9);
    assert.equal(calculateNumber(3, 12.656), 16);
  });

  it('sum a and b',() => {
    assert.equal(calculateNumber(1.2, 4.3), 5);
    assert.equal(calculateNumber(1.5, 2.5), 5);
    assert.equal(calculateNumber(1.2, 2.5), 4);
    assert.equal(calculateNumber(2.5, 1.2), 4);
  });
});
