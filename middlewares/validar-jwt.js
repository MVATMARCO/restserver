const { response, request } = require("express");

const jwt = require('jsonwebtoken')

const validarJWT = (req = request, res = response, next) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg: 'No hay Token en la peticion'
        })

    }
    try {
        jwt.verify(token, 'elmvatPubli5')
        next();

    } catch (error) {
        console.log(error)
        return res.status(401).json({
            msg: 'Token no valido'
        })
    }
}

module.exports = { validarJWT }