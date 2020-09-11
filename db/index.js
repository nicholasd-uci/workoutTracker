module.exports = require('mongoose').connect(process.env.MONGODB || 'mongodb://localhost/workout_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})