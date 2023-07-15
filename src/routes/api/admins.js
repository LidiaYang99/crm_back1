const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('you just get un administrador')
})

router.post('/', (req, res) => {
    res.send('tu has mandado un admin nuevo')
})

router.put('/', (req, res) => {
    res.send('tu acabas de actualizar un admin')
});

router.delete('/', (req, res) => {
    res.send('tu acabas de borrar un admin')
});

module.exports = router;