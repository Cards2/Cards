const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//work on visual indicators/developing a visual language
// examples: is the project active || is the project full || project open to application etc etc.

const string = {
    type: String,
    required: true
  };

  const projectSchema = new Schema({
    name: string,
    description: string,
    //timeframe start and end date
    //status options: proposed, in production, on hold, completed
    //filled positions and required positions
  });

  // name
// description
// timeline
// status
// filled positions/required positions
//

const ProjectData = mongoose.model("ProjectData", projectSchema);
module.exports = ProjectData;