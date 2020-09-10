const { model, Schema } = require('mongoose')

const User = new Schema({
  name: {
    type: String,
    required: true
  },
  workout: [{
    type: Schema.Types.ObjectId,
    ref: 'Workout'
  }]
}, { timestamps: true })

module.exports = model('User', User)
