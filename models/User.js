const { model, Schema } = require('mongoose')

const User = new Schema({
  name: {
    type: String,
    required: true
  },
  Workout: [{
    type: Schema.Types.ObjectId,
    ref: 'Workout'
  }]
}, { timestamps: true })

module.exports = model('User', User)
