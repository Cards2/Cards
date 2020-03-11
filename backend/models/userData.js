const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const string = {
  type: String,
  required: true
};

const minMaxNum = {
  type: Number,
  required: true,
  range: {
    min: { type: Number, min: 0 },
    max: { type: Number, min: 0 }
  }
};

const timeFrame = {
  type: String,
  enum: ["always", "sometimes", "never"]
};

const userDataSchema = new Schema({
  userID: string,
  username: string,
  title: string,
  art: minMaxNum,
  programming: minMaxNum,
  design: minMaxNum,
  audio: minMaxNum,
  writing: minMaxNum,
  about: string,
  monday: timeFrame,
  tuesday: timeFrame,
  wednesday: timeFrame,
  thursday: timeFrame,
  friday: timeFrame,
  saturday: timeFrame,
  sunday: timeFrame,
  quote: string
});

const UserData = mongoose.model("UserData", userDataSchema);
module.exports = UserData;
