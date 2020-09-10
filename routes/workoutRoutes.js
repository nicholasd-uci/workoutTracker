const router = require('express').Router()
const { Workout } = require('../models')

router.get('/workouts', (req, res) => {
  // leave empty to get back everything
  Workout.find()
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

router.get('/workouts/range', (req, res) => {
  // leave empty to get back everything
  Workout.find()
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})


router.post('/workouts', (req, res) => {
  Workout.create(req.body)
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

router.put('/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})



module.exports = router