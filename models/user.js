const db = require('mongoose')

const userSchema = db.Schema({
  name: {
    type: String,
    default: null
  },
  gender: {
    type: String,
    default: null
  },
  age: {
    type: Number,
    default: null
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = db.model('users', userSchema)