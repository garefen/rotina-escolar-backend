const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const { userId } = req.body;

        const user = await User.findById(userId);

        return res.json(user)
    },

    async store(req, res) {
        let { email, password, name } = req.body;

        const userExists = await User.findOne({email});

        if (userExists) {
            bcrypt.compare(password, userExists.password).then(function(result) {
                if (result) {
                    const { _id } = userExists;
                    name = userExists.name;
                    return res.json({_id, email, name, message: "redirect"});
                } else {
                    return res.json({message: 'user exists'});
                }
            });
        } else {
            bcrypt.hash(password, saltRounds).then(async function(hash) {
                const user = User.create({
                    email,
                    password: hash,
                    name
                });
                user.then(function() {
                    const {_id} = user;
                    return res.json({_id, email, name, message: "new user"});
                });
            });
        }
    }
}