const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const minMax = {
  min: { type: Number, min: 0 },
  max: { type: Number, min: 0 }
};

const userDataSchema = new Schema({
  userID: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  art: {
    type: Number,
    required: true,
    range: minMax
  },
  programming: {
    type: Number,
    required: true,
    range: minMax
  },
  design: {
    type: Number,
    required: true,
    range: minMax
  },
  audio: {
    type: Number,
    required: true,
    range: minMax
  },
  writing: {
    type: Number,
    required: true,
    range: minMax
  },
  about: {
    type: String,
    required: true
  },
  monday: {
    type: String,
    enum: ["always", "sometimes", "never"]
  },
  tuesday: {
    type: String,
    enum: ["always", "sometimes", "never"]
  },
  wednesday: {
    type: String,
    enum: ["always", "sometimes", "never"]
  },
  thursday: {
    type: String,
    enum: ["always", "sometimes", "never"]
  },
  friday: {
    type: String,
    enum: ["always", "sometimes", "never"]
  },
  saturday: {
    type: String,
    enum: ["always", "sometimes", "never"]
  },
  sunday: {
    type: String,
    enum: ["always", "sometimes", "never"]
  },
  quote: {
    type: String,
    required: true
  }
});

const UserData = mongoose.model("UserData", userDataSchema);
module.exports = UserData;
