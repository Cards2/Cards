const mongoose = require("mongoose");
const Schema = mongoose.Schema;



  const ProjectMovement = new Schema({
    requestedInvite: { type : Array , "default" : [] }, 
    pendingInvite: { type : Array , "default" : [] }, 
    acceptedInvite: { type : Array , "default" : [] }, 
  });

  
  const ProjectInteractions = mongoose.model("ProjectInteractions", UserMovement);
  module.exports = ProjectInteractions;