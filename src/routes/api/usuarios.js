const router = require('express').Router();

const usuariosController = require('../../controllers/usuarios.controller')
const { checkTokenUser } = require('../../helpers/middlewares');


router.get('/', usuariosController.getAll);
router.get('/perfil', checkTokenUser, usuariosController.getUser);
router.get('fecha/:fecha', checkTokenUser, usuariosController.getByDate);

router.post('/', usuariosController.createUsers);
router.post('/login/user', usuariosController.checkLoginUser);
router.post('/horas', checkTokenUser, usuariosController.registroHours);

router.put('/', usuariosController.updateUsuario);

router.delete('/', checkTokenUser, usuariosController.deleteUsers);

module.exports = router;

