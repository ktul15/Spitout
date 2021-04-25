const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.set('debug', true)

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Post', postSchema)