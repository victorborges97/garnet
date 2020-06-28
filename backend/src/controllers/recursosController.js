const express = require('express');

const authMiddlewares = require('../middlewares/auth')
const Recurso = require('../models/recursoSchema');

const router = express.Router();

//router.use(authMiddlewares); //desligado para teste no app

//Criação do Recurso Feito
router.post('/', async (req, res) => {
    const { descricao } = req.body;

    try {
        if (await Recurso.findOne({ descricao }))
            return res.status(400).send({ error: 'Recurso já existe.' });

        const descr = await Recurso.create({ ...req.body });//adicionando isso (, user: req.userId) no campo ao lado adiciona o id do usuario que está criando esse recurso, se o controller estiver ativado.

        return res.send({ descr });
    } catch (err) {
        return res.status(400).send({ error: 'Falha no registro de Recurso' });
    }
});

//Listagens dos Recursos - Feito
router.get('/', async (req, res) => {
    try {
        const data = await Recurso.find()

        return res.send({ data });
    }catch(err) {
        return res.status(400).send({ error: 'Erro ao carregar os Recursos' });
    }
});

//Listando o Recurso especificado com id - Feito
router.get('/:recursoId', async (req, res) => {
    try {
        const data = await Recurso.findById(req.params.recursoId)//.populate('user'); para adicionar os dados do usuario que criou

        return res.send({ data });
    }catch(err) {
        return res.status(400).send({ error: 'Erro ao carregar o Recurso especificado' });
    }
});

//Delete Recurso especificado com id - Feito
router.delete('/:recursoId', async (req, res) => {
    try {
        await Recurso.findByIdAndDelete(req.params.recursoId)

        return res.send({ message: 'Apagado com sucesso!' });
    }catch(err) {
        return res.status(400).send({ error: 'Erro ao Deletar o Recurso especificado' });
    }
});

//Atualizando do Recurso com id - Feito
router.put('/:recursoId', async (req, res) => {
    try {
        const { descricao, setor, status, qtde } = req.body;

        const descr = await Recurso.findByIdAndUpdate(req.params.recursoId, {
            descricao,
            setor,
            status,
            qtde
        }, { new:true });
        
        return res.send({ descr });
    } catch (err) {
        return res.status(400).send({ error: 'Falha na atualização do Recurso' });
    }
});

module.exports = app => app.use('/recursos', router)
