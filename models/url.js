const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  origin: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  }
})
module.exports = mongoose.model('Url', urlSchema)