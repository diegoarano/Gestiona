const mongoose = require('mongoose');

const types = mongoose.Schema.Types;

const Schema = new mongoose.Schema({
    "_id": {
        require: true,
        type: types.ObjectId
    },

    "empleado": {
        require: true,
        type: types.String
    },
    "proveedor": {
        require: true,
        type: types.String
    },

    "fecha": {
        require: true,
        type: types.Date
    },
   "productos":{
    require:true,
      type: [{
        require: true,
        type: types.String,
        enum: ["carnes", "verduras"]
    }],


  }
   

})


module.exports = mongoose.model("pedido", Schema)