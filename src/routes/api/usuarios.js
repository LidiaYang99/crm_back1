const router = require('express').Router();

const usuariosController = require('../../controllers/usuarios.controller')
const { checkUsuarioId } = require('../../helpers/middlewares')

router.get('/', usuariosController.getAll);

router.get('/:usuarioId', checkUsuarioId, usuariosController.getUser);

router.get('/:usuarioId/fecha/:fecha', checkUsuarioId, usuariosController.getByDate);

router.post('/', usuariosController.createUsers);

router.put('/:usuarioId', checkUsuarioId, usuariosController.updateUsuario);

router.delete('/:usuarioId', checkUsuarioId, usuariosController.deleteUsers);

module.exports = router;

