const mongoose = require('mongoose');

const AlunasSchema = new mongoose.Schema({
    nome: {type: String},
    dateOfBirth: {type: String},
    nasceuEmSp: {type: Boolean},
    livros:{Array}


})