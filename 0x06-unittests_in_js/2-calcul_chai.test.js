const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('Should test the SUM:', () => {
    chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('Should test the SUBTRACT:', () => {
    chai.expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('Should test the DIVIDE:', () => {
    chai.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('Should test the DIVIDE W 0:', () => {
    chai.expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
