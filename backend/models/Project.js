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
    max: { type: Number, max: 5 }
  }
};

const projectSchema = new Schema({
  projectTitle: { type: String, required: true, unique: true },
  description: string,
  startDate: {
    type: Date,
    // min: "2000-01-01",
    max: Date.now()
  },
  //a projected end date (not required?)
  endDate: {
    type: Date,
    min: Date.now()
    // max: 2030 - 01 - 01
  },
  status: {
    type: String,
    enum: ["proposed", "inProduction", "onHold", "completed"]
  },
  artPositions: minMaxNum,
  designPositions: minMaxNum,
  programmingPositions: minMaxNum,
  writingPositions: minMaxNum,
  soundPositions: minMaxNum
});

const ProjectData = mongoose.model("ProjectData", projectSchema);
module.exports = ProjectData;
