const user = require('../models/user.model');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path');
const fs = require('fs');
const bodycontroller = require('./body.controller');

const absolutePath = path.join('', 'config/secrets.json');
const secretContents = fs.readFileSync(absolutePath);
const secrets = JSON.parse(secretContents);

mongoose.connect("mongodb://localhost:27017/gestionstock", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})

console.log("va...funciona")
exports.register = (req, res) => {
        bodycontroller.checkBody(res, req.body, [
        "username",
        "password",
        "email"
    ]);
  
    user.find({$or:[{
            userName: req.body["username"]
        }, {
            email: req.body["email"]
        }]},
        (error, result) => {
            if (error) throw error;

            if (result.length !== 0) {
                res.send({
                    "error": "Usuario ya existe."
                });
            } else {
                bcrypt.hash(req.body["password"], 10, (error, hash) => {
                    if (error) throw error;
                    const data = {
                        "_id": mongoose.Types.ObjectId(),
                        "username": req.body.userName,
                        "password": hash,
                        "email": req.body.email
                    }
                    const newRegister = new user(data);
                    newRegister.save((error) => {
                        if (error) throw error;
                        res.send({
                            "mensaje": "usuario registrado!!!",
                            "_id": data._id
                        })
                    })
                })
            }
        })
}
//LOGIN EXPORT
exports.login = (req, res) => {

    user.find({$or:[{
        userName: req.body["username"]
    }, {
        email: req.body["email"]
    }]},
        (error, user) => {
            if (error) throw error;
            if(user[0] === undefined){
                res.send({ "error": "usuario o password incorrectos"})
            }else{ 
                bcrypt.compare(
                req.body.password,
                user[0].password,
                (error, coincidence) => {
                    if (error) throw error;
                    if (coincidence === true) {
                        jwt.sign({
                                "username": user.userName
                            },
                            secrets.jwt_clave,
                            (error, token) => {
                                if (error) throw error;
                                res.cookie("noisses", token);
                                res.send({
                                    "succes": "Bienvenido",
                                    "token": token
                                })
                            }
                        )
                    } else {
                        res.send({
                            "error": "usuario o password incorrectos"
                        })
                    }
                }
            )
        }

           


        }


    )

}
exports.checkToken = (req, res, callback) => {

    if (req.cookies["noisses"] !== undefined) {

        jwt.verify(
            req.cookies["noisses"],
            secrets.jwt_clave,
            (error, verificado) => {
                if (error) throw error;

                if (!verificado) {
                    res.send({
                        "error": "token no valido"
                    })
                    return false;
                } else {
                    callback(req, res)
                    return true;
                }
            }
        )
    } else {
        res.send({
            "error": "usuario sin autenticar",
            "login": "/login"
        })
        return false;
    }
}