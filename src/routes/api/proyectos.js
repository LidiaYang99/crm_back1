const { getAllProyectos, postNewProyecto, actualizaProyecto, removeProyecto, getForMonth } = require('../../controllers/proyectos.controller');

const router = require('express').Router();

router.get('/', getAllProyectos)
router.get('/:usuarioId/:proyectoId/:mes', getForMonth)
router.post('/', postNewProyecto)
router.put('/:proyectoId', actualizaProyecto)
router.delete('/:proyectoId', removeProyecto);



module.exports = router;