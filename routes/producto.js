const { Router } = require('express');
const { check } = require('express-validator');
const { productoGET, productoPOST, productoPUT, productoDELETE } = require('../controllers/producto');
const { validarJWT } = require('../middlewares/validar-jwt')

const produc = Router();
//las peticiones get,post,put,delete que fueron 
//planteadas en ../models/producto
produc.get('/', validarJWT, productoGET)

produc.post('/', [check()], productoPOST)

produc.put('/:id', productoPUT)

produc.delete('/', productoDELETE)


module.exports = produc;