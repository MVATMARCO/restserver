const { request, response } = require('express');

const bcryptjs = require('bcryptjs');

const Usuario = require('../models/user');
const { generarToken } = require('../helper/generar-jwt')

const login = async(req = request, res = response) => {
    const { correo, password } = req.body;

    try {
        //verificar que el correo existe
        const usuario = await Usuario.findOne({ correo });
        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario o contrasenia incorrecta'
            })

        }
        //verificar que el usuario este activo
        if (!usuario.estado) {
            return res.status(400).json({
                msg: 'Usuario o contrasenia incorrecta'
            })
        }
        //verificar que la contasenia sea correcta
        const validarPassword = bcryptjs.compareSync(password, usuario, password)
        if (!validarPassword) {
            return res.status(400).json({
                msg: 'Usuario o contrasenia incorrecta'
            })
        }
        //crear token
        const token = await generarToken(usuario.id);
        //respuesta

    } catch (error) {
        return res.status(500).json({
            msg: 'Error, Problemas en el servidor hable con el Admin'
        })

    }

    res.json({
        msg: 'Login Exitoso',
        token,
        correo,
        password,
    })

}

module.exports = { login };