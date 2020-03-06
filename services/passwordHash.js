const bcrypt = require('bcrypt');

module.exports = {
    create (password) {
        const saltRounds = 10;
        bcrypt.hash(password, saltRounds, function(err, hash) {
            return hash;
        });
    },
    compare (password, hash) {
        bcrypt.compare(password, hash, function(err, result) {
            return result
        });
    }

}