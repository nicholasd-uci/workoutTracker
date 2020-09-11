const router = require('express').Router()
const { Workout } = require('../models')


// GET ALL === workouts
router.get('/workouts', (req, res) => {
  Workout.find()
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

// GET ALL === creates the pie chart
router.get('/workouts/range', (req, res) => {
  Workout.find()
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

// CREATE ONE
router.post('/workouts', (req, res) => {
  Workout.create(req.body)
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

// UPDATE ONE
router.put('/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})



module.exports = router