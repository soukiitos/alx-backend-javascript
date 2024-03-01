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

  it('Returns 404 for negative number', (done) => {
    const options = {
      url: 'http://localhost:7865/cart/-123',
      method: 'GET'
    };

    request(options, function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('Response 404 when id is not a number', (done) => {
    const options = {
      url: 'http://localhost:7865/cart/ab12-h547-267c',
      method: 'GET'
    };

    request(options, function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
