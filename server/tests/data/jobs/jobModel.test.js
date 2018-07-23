const mongoose = require('mongoose');
const chai = require('chai');
const Job = require('../../../data/jobs/jobModel');

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
  after()
  it('Job should require titleAndSalary', () => {
    const job = 'eyo';
    expect(job).to.be.null;
  });
});
