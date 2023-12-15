const express = require('express');
const cors = require('cors');

const usu = require("./Rutas/prueba")

const principal = require('./Rutas');
const app = express();
app.use(cors({ origin: true, methods: ['GET', 'POST', 'DELETE', 'PUT'] }));

//middlewars
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', principal);

//operacion de la api
app.get('/usuario', usu.Listar);

let puerto = 5000;
app.listen(puerto, () => {
    console.log('localhost:' + puerto);
});