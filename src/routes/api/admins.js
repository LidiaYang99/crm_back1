const { getAllAdmin, postNewProyecto, removeProyecto, getAllProyectos, actualizaAdmin, actualizaProyecto, removeAdmin, postNewAdmin } = require('../../controllers/admins.controller');

const router = require('express').Router();

router.get('/', getAllAdmin)




router.post('/', postNewAdmin)



router.put('/:adminId', actualizaAdmin);



router.delete('/:adinIdm', removeAdmin);



module.exports = router;