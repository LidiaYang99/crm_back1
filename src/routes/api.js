const router = require('express').Router();

router.use('/admins', require('./api/admins'));
router.use('/departamentos', require('./api/departamentos'));
router.use('/usuarios', require('./api/usuarios'))


module.exports = router;