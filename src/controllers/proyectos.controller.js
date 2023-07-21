const ProyectoModel = require('../models/proyecto.model');

const getAllProyectos = async (req, res) => {
    try {
        const [proyectos] = await ProyectoModel.getProyectos();
        res.json(proyectos)
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const postNewProyecto = async (req, res) => {
    try {
        const [result] = await ProyectoModel.insertProyecto(req.body);
        const [proyectos] = await ProyectoModel.getByProyectoioId(result.insertId);
        res.json(proyectos[0])
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const actualizaProyecto = async (req, res) => {
    try {
        const { proyectoId } = req.params
        await ProyectoModel.updateProyecto(proyectoId, req.body);
        const [proyectos] = await ProyectoModel.getByProyectoioId(proyectoId)
        res.json(proyectos[0])
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const removeProyecto = async (req, res) => {
    try {
        const { proyectoId } = req.params
        const [deletedOne] = await ProyectoModel.deleteProyecto(proyectoId);
        res.json(deletedOne)
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

getForMonth = async (req, res) => {
    try {
        const { usuarioId, proyectoId, mes } = req.params
        const registro = await ProyectoModel.getMonth(usuarioId, proyectoId, mes)
        res.json(registro[0])

    } catch (error) {
        res.json({ fatal: error.message })
    }

}

module.exports = {
    getAllProyectos, postNewProyecto, actualizaProyecto, removeProyecto, getForMonth
}