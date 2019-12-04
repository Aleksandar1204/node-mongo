const mongoose = require('mongoose');

const Product = mongoose.model(
    'product', 
    new mongoose.Schema({
        name: String,
        description: Date,
        type: String,
        date: Date,
        price: Boolean,
        user_id: String
    }, 
    {
        collection: 'products'
    })
);

const getAll = (userID) => {
    return new Promise((success, fail) => {
        Product.find({user_id: userID}, (err, data) => {
            if(err){
                return fail(err);
            }
            return success(data);
        });
    });
};

const getOne = (id, userID) => {
    return new Promise((success, fail) => {
        Product.find({_id: id, user_id: userID}, (err, data) => {
            if(err){
                return fail(err);
            }
            return success(data[0]);
        });
    });
};

const save = (data) => {
    return new Promise((success, fail) => {
        var f = new Product(data);
        f.save(data, err => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
};

const remove = (id) => {
    return new Promise((success, fail) => {
        Product.deleteOne({_id: id}, err => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
}

const replace = (id, data) => {
    return new Promise((success, fail) => {
        Product.updateOne({_id: id}, data, err => {
            if(err){
                return fail(err);
            }
            return success();
        });
    });
}

module.exports = {
    getAll,
    getOne,
    save,
    remove,
    replace
};