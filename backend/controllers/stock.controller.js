const stock = require ('../models/stock.model');
const mongoose = require ('mongoose');

mongoose.connect("mongodb://localhost:27017/gestionstock",{ useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify:false})


//agregar un producto

exports.agregarproducto = (req, res)=>{
    const data ={
        "_id": mongoose.Types.ObjectId(),
        "categoria":req.body.categoria,
        "nombre": req.body.nombre,
        "cantminima": req.body.cantminima,
        "cantactual": req.body.cantactual
       
    }
    const nuevoproducto = new stock(data);
    nuevoproducto.save((error)=>{
        if (error) throw error;
        res.send({
            "mens": "producto agregado",
            "_id": data._id
        })
    })
}

//obtener lista de productos

exports.allproductos = (req, res)=>{
  stock.find((error, productos)=>{
        if (error) throw error;
        res.send(productos)
    })
}

//obtener un solo producto por su ID
exports.productoid = (req, res)=>{
    const id = req.params.id;
    stock.findById(id,(error, result)=>{
        if (error) throw error;
        res.send(result)
    })
}

// editar usuario

exports.modificoproducto = (req, res)=>{
    const data ={
        "_id": req.body._id,
        "categoria":req.body.categoria,
        "nombre": req.body.nombre,
        "cantminima": req.body.cantminima,
        "cantactual": req.body.cantactual
     
    }
    
    stock.findByIdAndUpdate(
        
        req.body._id,
        
        { $set: data },
                          
        (error, result) => {
            if (error) throw error;
           
            res.send({ "mensaje": "producto modificado" })
        }
    )

}

//eliminar usuario

exports.borrarproducto = (req,res)=>{
    const id = req.params.id;
    stock.findByIdAndDelete(id,(error, result)=>{
        if (error) throw error;
        res.send({"ok":"usuario borrado"})
    })
}

