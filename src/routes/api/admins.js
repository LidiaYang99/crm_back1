const { getAllAdmin, actualizaAdmin, removeAdmin/*  postNewAdmin */ } = require('../../controllers/admins.controller');
const { getAllAdmin, create, actualizaAdmin, removeAdmin } = require('../../controllers/admins.controller');

const router = require('express').Router();

router.get('/', getAllAdmin)
router.post('/', create/* postNewAdmin */)
router.post('/registro', create)
router.put('/:adminId', actualizaAdmin);
router.delete('/:adinIdm', removeAdmin);


module.exports = router;