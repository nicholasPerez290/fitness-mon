const mongoose = require('mongoose');

const Schema = mongoose.Schema

const workout = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
    type: {
        type: String,
    },
    name: {
        type: String
    },
    duration: {
        type: Number
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    }
}
],
totalDuration: {
    type: Number,
    default: 0,
}
})

const Workout = mongoose.model('workout', workout);

module.exports = Workout;