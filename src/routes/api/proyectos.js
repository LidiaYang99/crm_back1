const router = require('express').Router();


const { getAllProyectos, postNewProyecto, actualizaProyecto, removeProyecto } = require('../../controllers/proyectos.controller');



router.get('/', getAllProyectos)
router.post('/', postNewProyecto)
router.put('/:proyectoId', actualizaProyecto)
router.delete('/:proyectoId', removeProyecto);


module.exports = router;