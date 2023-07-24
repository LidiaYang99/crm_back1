const router = require('express').Router();

const { checkToken } = require('../helpers/middlewares');

router.use('/admins', require('./api/admins'));
router.use('/usuarios', /* checkToken ,*/ require('./api/usuarios'));
router.use('/proyectos', require('./api/proyectos'));



module.exports = router;