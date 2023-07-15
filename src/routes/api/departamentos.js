const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('you just get un departamento')
})

router.post('/', (req, res) => {
    res.send('tu has mandado un departamento nuevo')
})

router.put('/', (req, res) => {
    res.send('tu acabas de actualizar un departamento')
});

router.delete('/', (req, res) => {
    res.send('tu acabas de borrar un departamento')
});

module.exports = router;