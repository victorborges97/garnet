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

//Rota de Cadastro de Usuario - Feito
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

//Rota de Atualizar de Usuario - feito
router.put('/:userId', async (req, res) => {
    try {
        const { name, usuario, password, identific, address } = req.body;

        const UsuarioUpdate = await User.findByIdAndUpdate(req.params.userId, {
            name,
            usuario,
            identific,
            address
        }, { new:true });
        
        UsuarioUpdate.password = password
        await UsuarioUpdate.save();

        UsuarioUpdate.password = undefined;

        return res.send({ UsuarioUpdate });
    } catch (err) {
        return res.status(400).send({ error: 'Falha na atualização do Recurso' });
    }
});

//Rota de Authenticação do Usuario - Feito
router.post('/authenticate', async (req, res) => {
    const { usuario, password } = req.body;

    const user = await User.findOne({ usuario }).select('+password'); //buscar usuario no db

    if(usuario == '' && password =='')
        return res.status(400).send({ message: 'Campo de Usuario não preenchido', 'success': false });

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
//Rota Listar todos os usuarios - Feito
router.get('/', async (req, res) => {
    try {
        const data = await User.find()

        return res.send({ data });
    }catch(err) {
        return res.status(400).send({ error: 'Erro ao carregar os Usuarios' });
    }
});

//Rota Listar o Usuario especificado com id - Feito
router.get('/:userId', async (req, res) => {
    try {
        const data = await User.findById(req.params.userId)//.populate('user'); para adicionar os dados do usuario que criou

        return res.send({ data });
    }catch(err) {
        return res.status(400).send({ error: 'Erro ao carregar o Recurso especificado' });
    }
});

//Delete Recurso especificado com id - Feito
router.delete('/:userId', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.userId)

        return res.send({ message: 'Deletado com sucesso!' });
    }catch(err) {
        return res.status(400).send({ error: 'Erro ao Deletar o Recurso especificado' });
    }
});
module.exports = app => app.use('/auth', router)
