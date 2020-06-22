const express = require('express');
const router = express.Router();

//RETORNA TODOS AS SOLICITAÇÕES
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET retorna as solicitações'
    })
});

//RETORNA INSERE UMA SOLICITAÇÃO
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o POST insere um nova solicitação'
    })
});

//RETORNA UMA SOLICITAÇÃO ESPECIFICA
router.get('/:id_request', (req, res, next) => {

    const id = req.params.id_request

    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Você descobriu o ID especial, você pesquisou um id especifico',
            id: id
        })
    } else {
        res.status(200).send({
            mensagem: 'Você passou um ID, id',
            id: id
        })
    }
});

//RETORNA ....
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o PACTH dentro da rota de Solicitações'
    })
});

//DELETAMOS UMA SOLICITAÇÃO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Deletando uma solicição'
    })
});

module.exports = router;