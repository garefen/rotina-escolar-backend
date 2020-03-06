const bcrypt = require('bcrypt');

const User = require('../models/User');

module.exports = {
    async index(req, res) {
        let { email, password } = req.body;

        let user = await User.findOne({
            email
        })

        if (user) {
            bcrypt.compare(password, user.password).then(function(result) {
                if (result) {
                    const {_id, email, name} = user;
                    return res.json({_id, email, name});
                } else {
                    return res.json({error: true});
                }
            });
        } else {
            return res.json({error: true});
        }

    },
}