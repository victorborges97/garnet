const express = require('express');

const authMiddlewares = require('../middlewares/auth')
const Recurso = require('../models/recursoSchema');

const router = express.Router();

//router.use(authMiddlewares);

router.post('/cadastro', async (req, res) => {
    const { descricao } = req.body;

    try {
        if (await Recurso.findOne({ descricao }))
            return res.status(400).send({ error: 'Recurso já existe.' });

        const descr = await Recurso.create(req.body);

        return res.send({ descr });
    } catch (err) {
        return res.status(400).send({ error: 'Falha no registro de Recurso' });
    }
});

router.get('/api', async (req, res) => {
    Recurso.find({ })
        .then((data) => {
            console.log('Data: ',data)
            res.json(data)
        })
        .catch((error) => {
            console.log('error: ',error)
        })
});

module.exports = app => app.use('/recursos', router)
