const { Router } = require('express');
const { check } = require('express-validator');
const { usuariosGET, usuariosPOST, usuariosPUT, usuariosDELETE } = require('../controllers/user');
const { validarJWT } = require('../middlewares/validar-jwt')

const router = Router();

router.get('/', validarJWT, usuariosGET)

router.post('/', [check('correo', 'El correo es requerido').isEmail()], usuariosPOST)

router.put('/:id', usuariosPUT)

router.delete('/', usuariosDELETE)


module.exports = router;