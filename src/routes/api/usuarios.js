const router = require('express').Router();

const usuariosController = require('../../controllers/usuarios.controller')
const { checkTokenAdmin, checkTokenUser } = require('../../helpers/middlewares');


router.get('/', usuariosController.getAll);
router.get('/profile', checkTokenUser, usuariosController.getProfile)
router.get('/:usuarioId', /* checkUsuarioId, */ usuariosController.getUser);
router.get('/:usuarioId/:fecha', checkTokenAdmin, usuariosController.getByDate);


router.post('/', checkTokenAdmin, usuariosController.createUsers);
router.post('/login/user', usuariosController.checkLoginUser);
router.post('/horas', checkTokenAdmin, usuariosController.registroHours);
router.post('/horasdedicadas', usuariosController.horasDedicadas)


router.put('/editar/:usuarioId', checkTokenAdmin, usuariosController.updateUsuario);

router.delete('/:usuarioId',  usuariosController.deleteUsers);

module.exports = router;