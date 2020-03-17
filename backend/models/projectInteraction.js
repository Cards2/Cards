const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const string = {
    type: String,
    required: true
  };

  const ProjectMovement = new Schema({
    requestedCards: [],
    pendingCards: [],
    acceptedCards: [],



  });
  
  const ProjectInteractions = mongoose.model("ProjectInteractions", UserMovement);
  module.exports = ProjectInteractions;