const mongoose = require ('mongoose');

const User = mongoose.model(
    'users',
    new mongoose.Schema({
        firs_name: String,
        last_name:String,
        email: String,
        password: String
    })
);


const createUser = (data) => {
    return new Promise((success, fail) => {
        var user = new User(data);
        user.save(err => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};

module.exports = {
    createUser
}