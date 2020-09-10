module.exports = require('mongoose').connect('mongodb://localhost/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})