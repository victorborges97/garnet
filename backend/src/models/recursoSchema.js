const mongoose = require('../database/index');

const RecursoSchema = new mongoose.Schema({
    descricao: {
        type: String,
        require: true,
    },
    setor: {
        type: String,
        required: true,
    },
    qtde: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Recurso = mongoose.model('Recurso', RecursoSchema);

module.exports = Recurso;