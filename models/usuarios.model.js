const mongoose = require('mongoose');

const types = mongoose.Schema.Types;

const Schema = new mongoose.Schema({
    "_id": {
        require: true,
        type: types.ObjectId
    },

    
    "nombre": {
        require: true,
        type: types.String
    },

    "cargo": {
        require: true,
        type: types.String
    },

    "turno":{
        require: true,
        type: types.String
    },

})




module.exports = mongoose.model("trabajadores", Schema)