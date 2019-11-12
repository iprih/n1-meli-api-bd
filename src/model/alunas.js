const mongoose = require('mongoose');

const AlunasSchema = new mongoose.Schema({
    nome: {type: String},
    dateOfBirth: {type: String},//date
    nasceuEmSp: {type: String},//bollean
    livros:[{
        titulo: String,
        leu:Boolean
    }]
})