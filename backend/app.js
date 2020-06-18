const express = require('express');
const app = express();

const rotaResource = require('./routes/resource')           //importando a rota de recursos da pasta Routes
const rotaSolicitation = require('./routes/solicitation')   //importando a rota de solicitações da pasta Routes

app.use('/resource', rotaResource);

app.use('/solicitation', rotaSolicitation);

module.exports = app;