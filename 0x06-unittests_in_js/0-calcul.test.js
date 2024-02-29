const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('Should calculate two integers:', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('Should calculate one float & one integer:', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('Should one float & one integer (round down):', () => {
    assert.strictEqual(calculateNumber(1, 3.3), 4);
  });

  it('Should calculate one float & one integer reversed:', () => {
    assert.strictEqual(calculateNumber(3.7, 1), 5);
  });

  it('Should calculate two floats:', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('Should calculate two floats with borderline:', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
