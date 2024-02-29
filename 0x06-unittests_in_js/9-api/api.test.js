const request = require('request');
const { expect } = require('chai');

describe('Integration Testing', () => {
  it('Return StatusCode 200', (done) => {
    const options = {
      url: 'http://localhost:7865',
      method: 'GET'
    };

    request(options, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('GET cart page', () => {
  it('Response 200 when id is a number', (done) => {
    const options = {
      url: 'http://localhost:7865/cart/123',
      method: 'GET'
    };

    request(options, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('Response 400 when id is not a number', (done) => {
    const options = {
      url: 'http://localhost:7865/cart/abc',
      method: 'GET'
    };

    request(options, function (error, response, body) {
      expect(response.statusCode).to.equal(400);
      done();
    });
  });
});
