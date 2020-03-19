const proveedores = require ('../models/proveedores.model');
const mongoose = require ('mongoose');

mongoose.connect("mongodb://localhost:27017/gestionstock",{ useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify:false})


//agregar un proveedor

exports.agregarproveedor = (req, res)=>{
    const data ={
        "_id": mongoose.Types.ObjectId(),
        "nombre": req.body.nombre,
        "nif": req.body.nif,
        "concepto": req.body.concepto
       
    }
    const nuevoproveedor = new proveedores(data);
    nuevoproveedor.save((error)=>{
        if (error) throw error;
        res.send({
            "mens": "proveedor agregado",
            "_id": data._id
        })
    })
}

//obtener lista de proveedores

exports.allproveedores = (req, res)=>{
    proveedores.find((error, proveedores)=>{
          if (error) throw error;
          res.send(proveedores)
      })
  }
  
