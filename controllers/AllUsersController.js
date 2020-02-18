const User = require('../models/User');

module.exports = {
    async index(req, res) {

        const user = await User.find();

        return res.json(user)
    },

}