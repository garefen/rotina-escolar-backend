const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({
            email,
            password
        })

        if (user) {
            return res.json(user);
        }

        return res.json({error: true});
    },
}