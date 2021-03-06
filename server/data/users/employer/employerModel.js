const mongoose = require('mongoose');
const url = require('mongoose-type-url');
const bcrypt = require('bcrypt');


const EmployerSchema = new mongoose.Schema({
  userType: { type: String, default: 'Employer' },
  companyName: { type: String, required: true, unique: true },
  companyUrl: { type: mongoose.SchemaTypes.Url, required: true },
  industry: { type: String },
  description: { type: String, required: true },
  // TODO: ADD PASSWORD MIN-LENGTH BEFORE FINAL DEPLOY
  password: { type: String, maxlength: 20, required: true },
  email: { type: String, required: true, unique: true },
  submittedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
  createdOn: { type: mongoose.Schema.Types.Date, default: Date.now() },
});

EmployerSchema.pre('save', function hashPassword(next) {
  bcrypt.hash(this.password, 13, (err, hash) => {
    if (err) {
      return next(err);
    }
    this.password = hash;
    return next();
  });
});

EmployerSchema.methods.validify = function (passwordGuess) {
  return bcrypt.compare(passwordGuess, this.password);
};

module.exports = mongoose.model('Employer', EmployerSchema);
