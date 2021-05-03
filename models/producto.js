const { Schema, model } = require('mongoose');
const ProductoSchema = Schema({
    //Definiremos cada uno de los parametros necesarios 
    //para la tabla productos.
    //nombre:que sera de tipo string,obligatorio y unico
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatoruio'],
        unique: true
    },
    //estado: sera de tipo booleano,se pondra estado activo por defecto
    //sera requerido
    estado: {
        type: Boolean,
        default: true,
        required: true,
    },
    //usuario: tendra un usuario y sera requerido
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    //precio: el precio sera de tipo Numerico
    //por defecto se pondra en 0
    precio: {
        type: Number,
        default: 0,
    },
    //categoria:sera un objeto
    //sera requerido
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    },
    //descripcion; sera de tipo String
    // por defecto estara disponible
    descripcion: {
        descripcion: { type: String },
        disponible: { type: Boolean, default: true },

    }
});

module.exports = model('Producto', ProductoSchema);