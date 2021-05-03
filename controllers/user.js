const { response, request } = require('express');
const Usuario = require('./../models/user')
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const usuariosGET = async(req = request, res = response) => {
    const usuarios = await Usuario.find();
    res.json({
        msg: 'API - GET',

    })
}

const usuariosPOST = async(req = request, res = response) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return res.status(400).json({
            errors,
        });
    };

    let { nombre, correo, password, estado } = req.body;
    const usuario = new Usuario({ nombre, correo, password, estado });
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);
    const existeEmail = await Usuario.findOne({ correo });
    const existeRol = await Usuario.findOne({ rol });
    if (existeEmail) {
        return res.status(400).json({
            msg: 'Usuario ya existe'
        });
    };
    if (rol != existeRol) {
        return res.status(400).json({
            msg: 'Rol no permitido'
        });
    };
    //usuario.save();

    res.json({
        msg: 'API - POST',
        existeEmail,
        usuario,

    })
}
const usuariosPUT = async(req = request, res = response) => {
    const id = req.params.id;
    let { password, ...resto } = req.body;
    const salt = bcrypt.genSaltSync();
    password = bcrypt.hashSync(password, salt);

    const usuario = await Usuario.findOneAndUpdate(id, resto);
    res.json({
        msg: 'API - PUT',
        id,
        usuario,
    })
}
const usuariosDELETE = async(req = request, res = response) => {
    const id = req.params.id;
    //const usuario = await Usuario.findByIdAndDelete(id);
    const usuario = await Usuario.findOneAndUpdate(id, { estado: false });
    res.json({
        msg: 'API - DELETE',
        usuario,

    })
}
module.exports = {
    usuariosGET,
    usuariosPOST,
    usuariosPUT,
    usuariosDELETE,

}