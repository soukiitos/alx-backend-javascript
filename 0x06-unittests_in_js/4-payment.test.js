const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('Stubs', () => {
  it('Should log the correct msg and stub the calculateNumber', () => {
    const stubUtils = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(stubUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    stubUtils.restore();
    consSpy.restore();
  });
});
