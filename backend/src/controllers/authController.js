const express = require('express');

const User = require('../models/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authconfig = require('../config/auth.json')

const router = express.Router();

function generateToken(params = {}) {
    return jwt.sign(params, authconfig.secret, {
        expiresIn: 86400,
    });
};

//Rota de Cadastro de Usuario
router.post('/register', async (req, res) => {
    const { usuario } = req.body;

    try {
        if (await User.findOne({ usuario }))
            return res.status(400).send({ message: 'Usuario já existe.' });

        const user = await User.create(req.body);

        user.password = undefined;  //esconder a senha na resposta.

        return res.send({ user });
    } catch (err) {
        return res.status(400).send({ message: 'Falha no registro de Usuario' });
    }
});

//Rota de Authenticação do Usuario
router.post('/authenticate', async (req, res) => {
    const { usuario, password } = req.body;

    const user = await User.findOne({ usuario }).select('+password'); //buscar usuario no db

    if (!usuario)
        return res.status(400).send({ message: 'Usuario não existe', 'success': false });
    

    if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({ message: 'Senha invalida', 'success': false });

    user.password = undefined;  //esconder a senha na resposta.

    res.send({ 
        'success': true,
        user, 
        token: generateToken({ id: user.id }),
    });
});
//Todos usuarios
router.get('/api', async (req, res) => {
    User.find({ })
        .then((data) => {
            console.log('Data: ',data)
            res.json(data)
        })
        .catch((error) => {
            console.log('error: ',error)
        })
});


module.exports = app => app.use('/auth', router)
