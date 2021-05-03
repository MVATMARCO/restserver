const { Schema, model } = require('mongoose');
const usuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El Nombre es requerido']
    },
    correo: {
        type: String,
        required: [true, 'El Correo es requerido'],
        unique: true,
    },
    password: {
        type: String,
    },
    estado: {
        type: Boolean,
        default: true
    },
    rol: {
        type: String,
        required: true,
        default: 'USER_ROLE',
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    }

});

module.exports = model('Usuario', usuarioSchema);