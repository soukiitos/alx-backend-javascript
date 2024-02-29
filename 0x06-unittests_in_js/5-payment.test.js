const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToAPI = require('./5-payment');

describe('Hooks', () => {
  let consSpy;
  beforeEach(() => {
    consSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consSpy.restore();
  });

  it('Should log 120 with 100, 20', () => {
    sendPaymentRequestToAPI(100, 20);

    expect(consSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(consSpy.calledOnce).to.be.true;
  });

  it('Should log 20 with 10, 10', () => {
    sendPaymentRequestToAPI(10, 10);

    expect(consSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(consSpy.calledOnce).to.be.true;
  });
});
