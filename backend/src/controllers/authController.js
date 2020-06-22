const express = require('express');

const User = require('../models/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authconfig = require('../config/auth.json')

const router = express.Router();

//Rota de Cadastro de Usuario
router.post('/register', async (req, res) => {
    const { usuario } = req.body;

    try {
        if (await User.findOne({ usuario }))
            return res.status(400).send({ error: 'Usuario já existe.' });

        const user = await User.create(req.body);

        user.password = undefined;  //esconder a senha na resposta.

        return res.send({ user });
    } catch (err) {
        return res.status(400).send({ error: 'Falha no registro de Usuario' });
    }
});

//Rota de Authenticação do Usuario
router.post('/authenticate', async (req, res) => {
    const { usuario, password } = req.body;

    const user = await User.findOne({ usuario }).select('+password'); //buscar usuario no db

    if (!usuario)
        return res.status(400).send({ error: 'Usuario não existe' });
    

    if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Senha invalida' });

    user.password = undefined;  //esconder a senha na resposta.

    const token = jwt.sign({ id: user.id }, authconfig.secret, {
        expiresIn: 86400,
    });

    res.send({ user, token });
});


module.exports = app => app.use('/auth', router)
