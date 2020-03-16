const mongoose = require('mongoose');

const types = mongoose.Schema.Types;

const Schema = mongoose.Schema({
    "_id": {
        type: types.ObjectId,
        require: true
    },
    "username":{
        type: types.String,
        require: true,
        min: 5,
        max: 45
    },
    
   
    "password":{
        type: types.String,
        require: true
    },
   
    "email":{
        type: types.String,
        require: true,
        min:5,
        max: 250

    },
   
})

module.exports = mongoose.model('usuario', Schema)