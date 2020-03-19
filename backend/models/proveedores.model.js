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
    "nif": {
        require: true,
        type: types.Number
    },
    "concepto": {
        require: true,
        type: types.String
    },
   

})

module.exports = mongoose.model("proveedores", Schema)