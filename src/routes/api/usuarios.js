const router = require('express').Router();

const usuariosController = require('../../controllers/usuarios.controller')


router.get('/', usuariosController.getAll)


router.get('/:usuarioId', usuariosController.getUsuario
)

router.put('/', (req, res) => {
    res.send('tu acabas de actualizar un usuario')
});

router.delete('/', (req, res) => {
    res.send('tu acabas de borrar un usuario')
});

module.exports = router;