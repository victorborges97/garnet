const express = require('express');
const router = express.Router();

//Aqui podemos trazer a lista de todos os recursos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de Recursos'
    })
});

//Aqui podemos inserir um recurso
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o POST dentro da rota de Recursos'
    })
});

//Aqui podemos trazer o recurso especifico
router.get('/:id_resource', (req, res, next) => {

    const id = req.params.id_resource

    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Você descobriu o ID especial',
            id: id
        })
    } else {
        res.status(200).send({
            mensagem: 'Você passou um ID',
            id: id
        })
    }
});

//Aqui podemos inserir um recurso
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o PACTH dentro da rota de Recursos'
    })
});

//Aqui podemos inserir um recurso
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o DELETE dentro da rota de Recursos'
    })
});

module.exports = router;