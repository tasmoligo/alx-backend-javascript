const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber with SUM', () => {
  it('adds', () => {
    expect(calculateNumber('SUM', 0.3, 5)).to.equal(5);
    expect(calculateNumber('SUM', 8.9, 0)).to.equal(9);
    expect(calculateNumber('SUM', 12.656, 3)).to.equal(16);
  });
});

describe('calculateNumber with SUBTRACT', () => {
  it('subtracts', () => {
    expect(calculateNumber('SUBTRACT', 5, 0.3)).to.equal(5);
    expect(calculateNumber('SUBTRACT', 0.3, 8.97)).to.equal(-9);
    expect(calculateNumber('SUBTRACT', 3, 12.656)).to.equal(-10);
  });
});

describe('calculateNumber with DIVIDE', () => {
  it('divides', () => {
    expect(calculateNumber('DIVIDE', 1.2, 4.3)).to.equal(0.25);
    expect(calculateNumber('DIVIDE', 1.5, 2.4)).to.equal(1);
    expect(calculateNumber('DIVIDE', 1.2, 0.3)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 5.8, 2.9)).to.equal(2);
    expect(calculateNumber('DIVIDE', 0.4, 2.9)).to.equal(0);
  });
});
