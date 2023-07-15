const router = require('express').Router();


router.get('/', (req, res) => {
    res.send('get nuevo usuario')
})


router.post('/', (req, res) => {
    res.send('tu has mandado un usuario nuevo')
})

router.put('/', (req, res) => {
    res.send('tu acabas de actualizar un usuario')
});

router.delete('/', (req, res) => {
    res.send('tu acabas de borrar un usuario')
});

module.exports = router;