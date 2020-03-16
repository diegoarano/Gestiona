const mongoose = require('mongoose');

const types = mongoose.Schema.Types;

const Schema = new mongoose.Schema({
    "_id": {
        require: true,
        type: types.ObjectId
    },
    "categoria": {
        require: true,
        type: types.String
    },
    "nombre": {
        require: true,
        type: types.String
    },
    "cantminima": {
        require: true,
        type: types.Number
    },
    "cantmaxima": {
        require: true,
        type: types.Number
    },

    
})

module.exports = mongoose.model("stock", Schema)