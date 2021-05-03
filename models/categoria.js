const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema({
    //Definiremos los parametros requeridos 
    //para la tabla Categorias
    //nombre:sera de tipo String
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    //estado: el estado sera de tipo Booleano
    //por defecto el estado estara activo
    //sera requerido
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    //usuario: sera requerido
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
})

module.exports = model('Categoria', CategoriaSchema);