const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const string = {
    type: String,
    required: true
  };

const UserMovement = new Schema({
    userID: string,
    requestedCards: { type : Array , "default" : [] }, 
    pendingCards: [],
    acceptedCards: [],



  });
  
  const UserInteractions = mongoose.model("UserInteractions", UserMovement);
  module.exports = UserInteractions;