const router = require('express').Router()
const { User } = require('../models')

// GET all Users
router.get('/users', (req, res) => {
    User.find()
      .populate('Workout')
      .then(users => { res.json(users) })
      .catch(err => console.log(err))
  })
  
  // POST one User
  router.post('/users', (req, res) => {
    User.create(req.body)
      .then(user => res.json(user))
      .catch(err => console.log(err))
  })

  module.exports = router