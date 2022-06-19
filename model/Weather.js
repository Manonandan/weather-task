const mongoose = require('mongoose')

const WeatherSchema = new mongoose.Schema({
    date: {
        type: String
    },
    temperatureC: {
        type: Number
    },
    summary: {
        type: String
    },
    temperatureF: {
        type: Number
    },
    city: {
        type: String
    }
})

exports.WeatherSchema = mongoose.model('weathers', WeatherSchema)
