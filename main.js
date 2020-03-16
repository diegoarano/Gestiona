const express = require('express');
const bodyparse = require ('body-parser');
const cookieParser = require ('cookie-parser');
const usuarioscontroller = require ('./controllers/usuarios.controller');
const stockcontroller = require ('./controllers/stock.controller');
const pedidocontroller = require ('./controllers/pedido.controller');
const authcontroller = require('./controllers/auth.controller');

const server = express();

//midelware
server.use(bodyparse.json());
server.use(cookieParser());



//endpoint Regitro y Login
server.post('/registrarususario', authcontroller.register);

server.post('/login',authcontroller.login);


//endpoint usuarios
server.post('/nuevousuario', usuarioscontroller.crearusuario);

server.get('/allusuarios', usuarioscontroller.allusuarios);

server.get('/usuario/:id', usuarioscontroller.usuarioid);

server.put('/modificousuario', usuarioscontroller.modificousuario);

server.delete('/borrarusuario/:id', usuarioscontroller.borrarusuario);

//endpoint stock

server.post('/nuevoproducto', stockcontroller.agregarproducto);

server.get('/allproductos', stockcontroller.allproductos);

server.get('/producto/:id', stockcontroller.productoid);

server.put('/modificoproducto', stockcontroller.modificoproducto);

server.delete('/borrarproducto/:id', stockcontroller.borrarproducto);


//endpoints pedido

server.post('/hacerpedido', pedidocontroller.hacerpedido);

server.get('/verpedidos', pedidocontroller.verpedidos);

server.get('/pedido/:id', pedidocontroller.pedidoid);










server.listen(3000,  () =>{
    console.log('Example app listening on port 3000!');
  })
