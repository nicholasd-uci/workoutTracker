// we need to bring npm i express and make a const join
const express = require('express')
const { join } = require('path')

// make an express function
const app = express()

// Need middle ware here
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// need to require a connect to your route folder here
app.use(require('./routes'))

// require your db here and make sure to include the PORT
require('./db')
    .then(() => app.listen(3000))
    .catch(err => console.log(err))