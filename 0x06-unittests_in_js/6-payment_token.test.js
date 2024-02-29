const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
  it('The arg should return True?', (done) => {
    getPaymentTokenFromAPI(true)
      .then((resp) => {
        expect(resp).to.include({data: 'Successful response from the API' });
        done();
      })
      .catch((error) => done(error));
  });
});
