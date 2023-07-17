const { json } = require("body-parser")
const Usuario = require("../models/usuario.model")

const getAll = async (req, res) => {
    try {
        const [usuarios] =
            await Usuario.getUser()
        res.json(usuarios)
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const getUser = async (req, res) => {
    try {
        const [usuarios] = await Usuario.getById(req.params.usuarioId);
        if (usuarios.lenght === 0) {
            return res.json({ fatal: 'no existe un usuario con ese id ' })
        }
        res.json(usuarios[0])

    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const createUsers = async (req, res) => {
    try {
        const [result] = await Usuario.insert(req.body)
        const [usuarios] = await Usuario.getById(result.insertId)
        res.json(usuarios[0])
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const updateUsuario = async (req, res) => {
    try {
        const { usuarioId } = req.params
        await Usuario.update(usuarioId, req.body);
        const [usuarios] = await Usuario.getById(usuarioId)
        res.json(usuarios[0])
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const deleteUsers = async (req, res) => {
    try {
        const { usuarioId } = req.params
        const [deletedOne] = await Usuario.remove(usuarioId);
        res.json(deletedOne)
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const getByDate = async (req, res) => {
    try {
        const { usuarioId, fecha } = req.params

        const [proyectos] = await Usuario.getHour(usuarioId, fecha)
        res.json(proyectos)

    } catch (error) {
        res.json({ fatal: error.message })
    }
}


module.exports = {
    getAll, getUser, createUsers, deleteUsers, updateUsuario, getByDate
}
