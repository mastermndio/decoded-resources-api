'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//This creates a schemo for the structure of the data in MongoDB. It sets up the fields and their types to be used when entering and extracting data
let ResourceSchema = new Schema({
  _id: String,
  name: {
    type: String,
    required: 'Please enter a name for your resource'
  },
  url: {
    type: String,
    required: 'Please enter a valid URL for your resource'
  },
  skill: {
    type: [{
      type: String,
      enum: ['beginner', 'intermediate', 'advanced']
    }],
    required: 'Please enter a skill level of beginner, intermediate, or advanced'
  }
});

module.export = mongoose.model('Resources', ResourceSchema)

