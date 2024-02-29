const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('Spy', () => {
  it('Should ensure that the math is the same.', () => {
    const spyUtils = sinon.spy(Utils, 'calculateNumber');
    const consSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(spyUtils.calledOnceWithExaxtly('SUM', 100, 20)).to.be.true;
    expect(consSpy.calledOnceWithExaxtly('The total is: 120')).to.be.true;

    spyUtils.restore();
    consSpy.restore();
  });
});
