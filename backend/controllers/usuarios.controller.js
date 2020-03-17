const usuarios = require ('../models/usuarios.model');
const mongoose = require ('mongoose');

mongoose.connect("mongodb://localhost:27017/gestionstock",{ useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify:false})

//crear usuario
exports.crearusuario = (req, res)=>{
    const data ={
        "_id": mongoose.Types.ObjectId(),
        "nombre":req.body.nombre,
        "cargo": req.body.cargo,
        "turno": req.body.turno
       
    }
    const newusuario = new usuarios(data);
    newusuario.save((error)=>{
        if (error) throw error;
        res.send({
            "mens": "usuario agregado",
            "_id": data._id
        })
    })
}


//obtener lista de usuarios

exports.allusuarios = (req, res)=>{
    usuarios.find((error, usuarios)=>{
        if (error) throw error;
        res.send(usuarios)
    })
}

//obtener un solo usuario por su ID
exports.usuarioid = (req, res)=>{
    const id = req.params.id;
    usuarios.findById(id,(error, result)=>{
        if (error) throw error;
        res.send(result)
    })
}

// editar usuario

exports.modificousuario = (req, res)=>{
    const data ={
        "_id": req.body._id,
        "nombre":req.body.nombre,
        "cargo": req.body.cargo,
        "turno": req.body.turno
     
    }
    
    usuarios.findByIdAndUpdate(
        
        req.body._id,
        
        { $set: data },
                          
        (error, result) => {
            if (error) throw error;
           
            res.send({ "mensaje": "usuario modificado" })
        }
    )

}

//eliminar usuario

exports.borrarusuario = (req,res)=>{
    const id = req.params.id;
    usuarios.findByIdAndDelete(id,(error, result)=>{
        if (error) throw error;
        res.send({"ok":"usuario borrado"})
    })
}