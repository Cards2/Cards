const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const UserMovement = new Schema({
    requestedCards: { type : Array , "default" : [] }, 
    pendingCards: { type : Array , "default" : [] },
    acceptedCards: { type : Array , "default" : [] },
  });
  
  
  const UserInteractions = mongoose.model("UserInteractions", UserMovement);
  module.exports = UserInteractions;