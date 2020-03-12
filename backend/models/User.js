const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');


// Login User:
// required fields username and email that is validated through params below
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    },
  email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: 'Email address is required',
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);
