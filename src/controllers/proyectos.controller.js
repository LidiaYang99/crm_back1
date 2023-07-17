const ProyectoModel = require('../models/proyecto.model');

const getAllProyectos = async (req, res) => {
    const [proyectos] = await ProyectoModel.getProyectos();
    res.json(proyectos)
}

const postNewProyecto = async (req, res) => {
    const [result] = await ProyectoModel.insertProyecto(req.body);
    const [proyectos] = await ProyectoModel.getByProyectoioId(result.insertId);
    res.json(proyectos[0])
}

const actualizaProyecto = async (req, res) => {
    const { proyectoId } = req.params
    const [result] = await ProyectoModel.updateProyecto(proyectoId, req.body);
    const [proyectos] = await ProyectoModel.getByProyectoioId(proyectoId)
    res.json(proyectos[0])
}

const removeProyecto = async (req, res) => {
    const { proyectoId } = req.params
    const [deletedOne] = await ProyectoModel.deleteProyecto(proyectoId);
    res.json(deletedOne)
}

module.exports = {
    getAllProyectos, postNewProyecto, actualizaProyecto, removeProyecto
}