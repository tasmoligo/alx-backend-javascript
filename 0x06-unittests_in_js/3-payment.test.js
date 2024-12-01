const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('3-pyment.js');
const { should } = require('chai');
const should = require('chai').should();

describe('Utils', () {
  it("should calculate sum of two numbers", () {
    const spy = sinon.spy('Utils', calculateNumber);
    sendPaymentRequestToApi(100,20);
    spy.calledWith("SUM", 100, 20).should.equal(true);
    spy.restore();
  });
});
