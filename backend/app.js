const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const rotaResource = require('./src/routes/resource')           //importando a rota de recursos da pasta Routes
const rotaSolicitation = require('./src/routes/solicitation')   //importando a rota de solicitações da pasta Routes

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./src/controllers/authController')(app); // rota de usuario cadastro e authenticação
require('./src/controllers/recursosController')(app); // rota de usuario cadastro e authenticação

module.exports = app;