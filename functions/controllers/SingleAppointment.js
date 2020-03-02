const Appointment = require('../models/Appointment');

module.exports = {
    async index(req, res) {
        const { id } = req.body;

        const appointment = await Appointment.findById(id);

        return res.json(appointment);
    },

    async store(req, res) {
    },

    async update(req, res) {
    },

    async delete(req, res) {
    }
}