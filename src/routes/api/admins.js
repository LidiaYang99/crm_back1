const { getAllAdmin, actualizaAdmin, removeAdmin, create, checkLogin } = require('../../controllers/admins.controller');

const router = require('express').Router();

router.get('/', getAllAdmin);
router.post('/registro', create);
router.post('/login', checkLogin);
router.put('/:adminId', actualizaAdmin);
router.delete('/:adinIdm', removeAdmin);


module.exports = router;