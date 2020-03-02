const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    name: String,
    hour: String,
    day: Number,
    month: String,
    weekday: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    bullets: [String],
    date: Date
});

module.exports = mongoose.model('Appointment', AppointmentSchema);