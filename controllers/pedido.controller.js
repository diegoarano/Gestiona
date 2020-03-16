const pedido = require ('../models/pedido.model');
const mongoose = require ('mongoose');

mongoose.connect("mongodb://localhost:27017/gestionstock",{ useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify:false})

//hacer un pedido

exports.hacerpedido = (req, res)=>{
    const data ={
        "_id": mongoose.Types.ObjectId(),
        "empleado":req.body.empleado,
        "proveedor": req.body.proveedor,
        "concepto": req.body.concepto,
        "fecha": req.body.fecha
       
    }
    const nuevopedido = new pedido(data);
    nuevopedido.save((error)=>{
        if (error) throw error;
        res.send({
            "mens": "pedido efectuado",
            "_id": data._id
        })
    })
}

//obtener lista de pedidos

exports.verpedidos = (req, res)=>{
    pedido.find((error, pedido)=>{
          if (error) throw error;
          res.send(pedido)
      })
  }

  //obtener un solo pedido por su ID
exports.pedidoid = (req, res)=>{
    const id = req.params.id;
    pedido.findById(id,(error, result)=>{
        if (error) throw error;
        res.send(result)
    })
}
