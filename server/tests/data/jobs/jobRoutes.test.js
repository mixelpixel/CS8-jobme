const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const expect = chai.expect;

describe('Job Routes Tests', () => {
  before(() => {
    mongoose.connect('mongodb://localhost:27017/local')
      .then((response) => {
        console.log(response);
      }).catch((err) => {
        console.log('error: ', err);
      });
  });
  it('should allow you to post a new job.');
});
