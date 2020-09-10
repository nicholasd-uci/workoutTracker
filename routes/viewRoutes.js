const router = require('express').Router()
const { join } = require('path')

// GET ALL exercise
router.get('/exercise', (req, res) => {
  res.sendFile(join(__dirname, '../public/exercise.html'))
})

// GET ALL stats
router.get('/stats', (req, res) => {
  res.sendFile(join(__dirname, '../public/stats.html'))
})

// GET ALL
router.get('/*', (req, res) => {
  res.sendFile(join(__dirname, '../public/index.html'))
})

  module.exports = router