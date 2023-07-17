const router = require('express').Router();

const usuariosController = require('../../controllers/usuarios.controller')


router.get('/', usuariosController.getAll)

router.get('/:usuarioId', usuariosController.getUser)

//esta ruta puede estar en proyectos 

router.get('/:usuarioId/fecha/:fecha', usuariosController.getByDate)

router.post('/', usuariosController.createUsers);

router.delete('/:usuarioId', usuariosController.deleteUsers);

router.put('/:usuarioId', usuariosController.updateUsuario)

module.exports = router;