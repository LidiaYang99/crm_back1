const router = require('express').Router();

const { getAllAdmin, actualizaAdmin, removeAdmin, create, checkLogin } = require('../../controllers/admins.controller');

router.get('/', getAllAdmin);
router.post('/registro', create);
router.post('/login', checkLogin);
router.put('/:adminId', actualizaAdmin);
router.delete('/:adminId', removeAdmin);


module.exports = router;