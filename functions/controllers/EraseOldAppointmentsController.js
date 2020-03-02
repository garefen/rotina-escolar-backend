const Appointment = require('../models/Appointment');

module.exports ={
    async index() {
        const datenow = new Date()

        await Appointment.deleteMany({
            date: {
                $lt: datenow
            }
        });
    }
}