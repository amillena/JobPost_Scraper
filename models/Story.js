// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var StorySchema = new Schema({
  // title is a required string
  title: {
    type: String,
    required: false
  },
  // link is a required string
  link: {
    type: String,
    required: false
  },
  
  location: {
    type: String,
    required: false
  },
    image: {
      type: String,
      required: false
  },
    date: {
    type: String,
    required: false
  },
  

  saved: {
    type: Boolean,
    default: false
  },

  // This only saves one note's ObjectId, ref refers to the Note model
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// Create the Article model with the ArticleSchema
var Story = mongoose.model("Story", StorySchema);

// Export the model
module.exports = Story;
