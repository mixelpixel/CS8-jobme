const mongoose = require('mongoose');
const Employer = require('../../../../data/users/employer/employerModel');
const chai = require('chai');
const expect = chai.expect;

describe('Database Tests', () => {
  // Before starting the test, create a sandboxed database connection
  // Once a connection is established invoke done()
  before((done) => {
    mongoose.connect('mongodb://localhost/local');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', () => {
      console.log('We are connected to test database!');
      done();
    });
  });
  describe('Employer should require an email', () => {
    const employer = new Employer({});
  });
});